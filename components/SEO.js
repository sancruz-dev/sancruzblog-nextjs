import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <meta name="author" content="Sanmir Cruz" />
      <meta name="google-site-verification" content="ZnLQvRs1YC9JnhwdbB05dex6cUBzeNNhd2vG4ijPKgI" />
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="posts, blog, articles, artigos, programacao, Sancruz, Sanmir Cruz, sancruzdev, sancruz.dev, Sanmir, San, frontend, web frontend, desenvolvedor frontend, desenvolvedor web, react dev, react js, javascript, js, desenvolvedor de sistemas" />
      <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
      <title>{title}</title>
    </Head>
  );
}
