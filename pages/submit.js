import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';
import { buildSubmissionMdx, slugify } from '../utils/build-submission-mdx';

// Falls back to the local dev port so this works out of the box without
// requiring a .env entry - see content-submission-service/README.md.
const SUBMISSION_SERVICE_URL =
  process.env.NEXT_PUBLIC_SUBMISSION_SERVICE_URL || 'http://localhost:5080';

const LEVELS = ['Beginner', 'Intermediate', 'Advanced'];

const initialFormState = {
  title: '',
  description: '',
  slug: '',
  authorName: '',
  authorEmail: '',
  category: '',
  level: 'Beginner',
  tags: '',
  body: '',
};

const inputClass =
  'w-full rounded-lg px-4 py-2 bg-white bg-opacity-10 dark:bg-black dark:bg-opacity-30 ' +
  'border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 ' +
  'focus:outline-none focus:ring-2 focus:ring-primary';

const labelClass = 'block mb-1 font-bold opacity-70 text-sm uppercase';

export default function Submit({ globalData }) {
  const [form, setForm] = useState(initialFormState);
  const [slugTouched, setSlugTouched] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState([]);

  const handleChange = (field) => (event) => {
    const { value } = event.target;
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === 'title' && !slugTouched) {
        next.slug = slugify(value);
      }
      return next;
    });
  };

  const handleSlugChange = (event) => {
    setSlugTouched(true);
    setForm((prev) => ({ ...prev, slug: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    setErrors([]);
    setResult(null);

    const mdx = buildSubmissionMdx(form);
    const file = new Blob([mdx], { type: 'text/plain' });

    const body = new FormData();
    body.append('file', file, `${slugify(form.slug) || 'submission'}.mdx`);
    body.append('authorEmail', form.authorEmail);

    try {
      const response = await fetch(`${SUBMISSION_SERVICE_URL}/submissions`, {
        method: 'POST',
        body,
      });

      const payload = await response.json().catch(() => null);

      if (response.ok) {
        setStatus('success');
        setResult(payload);
        return;
      }

      setStatus('error');
      setErrors(
        payload?.errors
          ? Object.values(payload.errors).flat()
          : [`Erro inesperado (HTTP ${response.status}).`]
      );
    } catch (err) {
      setStatus('error');
      setErrors([
        'Não foi possível conectar ao serviço de submissões. Verifique se ele está rodando em ' +
          SUBMISSION_SERVICE_URL +
          '.',
      ]);
    }
  };

  return (
    <Layout>
      <SEO
        title={`Enviar artigo - ${globalData.name}`}
        description="Envie um artigo técnico para revisão."
      />
      <Header name={globalData.name} />

      <main className="w-full px-6 md:px-0">
        <h1 className="text-3xl md:text-4xl text-center mb-4 dark:text-white">
          Enviar artigo
        </h1>
        <p className="text-center opacity-70 mb-10">
          Preencha os campos abaixo. Seu artigo passará por validação
          automática e, em seguida, por curadoria humana antes de ser
          publicado.
        </p>

        {status === 'success' ? (
          <div className="rounded-lg p-6 bg-white bg-opacity-10 dark:bg-black dark:bg-opacity-30 border border-gray-800 dark:border-white border-opacity-10 text-center">
            <p className="text-xl mb-2">Submissão recebida! 🎉</p>
            <p className="opacity-70 mb-1">
              ID: <code>{result.id}</code>
            </p>
            <p className="opacity-70">Status atual: {result.status}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className={labelClass} htmlFor="title">
                Título
              </label>
              <input
                id="title"
                className={inputClass}
                value={form.title}
                onChange={handleChange('title')}
                required
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="description">
                Descrição
              </label>
              <input
                id="description"
                className={inputClass}
                value={form.description}
                onChange={handleChange('description')}
                required
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="slug">
                Slug
              </label>
              <input
                id="slug"
                className={inputClass}
                value={form.slug}
                onChange={handleSlugChange}
                placeholder="gerado a partir do título"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass} htmlFor="authorName">
                  Nome do autor
                </label>
                <input
                  id="authorName"
                  className={inputClass}
                  value={form.authorName}
                  onChange={handleChange('authorName')}
                  required
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="authorEmail">
                  E-mail de contato
                </label>
                <input
                  id="authorEmail"
                  type="email"
                  className={inputClass}
                  value={form.authorEmail}
                  onChange={handleChange('authorEmail')}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass} htmlFor="category">
                  Categoria
                </label>
                <input
                  id="category"
                  className={inputClass}
                  value={form.category}
                  onChange={handleChange('category')}
                  required
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="level">
                  Nível
                </label>
                <select
                  id="level"
                  className={inputClass}
                  value={form.level}
                  onChange={handleChange('level')}
                >
                  {LEVELS.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className={labelClass} htmlFor="tags">
                Tags (separadas por vírgula)
              </label>
              <input
                id="tags"
                className={inputClass}
                value={form.tags}
                onChange={handleChange('tags')}
                placeholder="rabbitmq, messaging"
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="body">
                Conteúdo (Markdown/MDX)
              </label>
              <textarea
                id="body"
                className={`${inputClass} font-mono text-sm`}
                rows={16}
                value={form.body}
                onChange={handleChange('body')}
                required
              />
            </div>

            {errors.length > 0 && (
              <div className="rounded-lg p-4 bg-red-500 bg-opacity-10 border border-red-500 border-opacity-40">
                <p className="font-bold mb-2 text-red-500">
                  Corrija os seguintes pontos:
                </p>
                <ul className="list-disc list-inside text-sm">
                  {errors.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="py-3 px-6 rounded-lg bg-primary text-white font-bold hover:opacity-90 transition disabled:opacity-50"
            >
              {status === 'submitting' ? 'Enviando...' : 'Enviar para revisão'}
            </button>
          </form>
        )}
      </main>

      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();
  return { props: { globalData } };
}
