# SanCruz Blog

![Status badge](https://img.shields.io/badge/Status-Em%20evolu%C3%A7%C3%A3o-blue.svg)

![Next Version](https://img.shields.io/badge/Next-latest-477EEB.svg)
![React Version](https://img.shields.io/badge/React-%5E18.2.0-477EEB.svg)
![Tailwind Version](https://img.shields.io/badge/Tailwind-%5E3.0.0-477EEB.svg)

![Thumb of project](./thumb-app.png)

## Sobre o projeto

Blog pessoal sobre desenvolvimento front-end, arquitetura de sistemas e
carreira em tecnologia. Os artigos são escritos em MDX, versionados neste
mesmo repositório e renderizados estaticamente pelo Next.js.

Este projeto também é parte do meu portfólio pessoal — feedback sobre
código, estrutura ou qualquer outro ponto de melhoria é muito bem-vindo.

## Stack

- [**Next.js**](https://nextjs.org/) (Pages Router) — geração estática (SSG) das páginas
- [**React 18**](https://react.dev/)
- [**Tailwind CSS**](https://tailwindcss.com/) + `@tailwindcss/typography`
- [**next-mdx-remote**](https://github.com/hashicorp/next-mdx-remote) — parsing e renderização do conteúdo MDX
- [**gray-matter**](https://github.com/jonschlinkert/gray-matter) — leitura do frontmatter dos posts
- [**rehype-prism**](https://github.com/mapbox/rehype-prism) — syntax highlighting nos blocos de código
- ESLint (`eslint-config-next`) + Prettier

## Como os posts funcionam

Cada artigo é um arquivo `.mdx` dentro de `posts/`. O nome do arquivo
(sem extensão) define o slug da URL (`/posts/<slug>`). Todo o conteúdo é
lido do sistema de arquivos em build-time — não há CMS nem banco de dados
envolvidos nesta etapa do projeto.

Frontmatter esperado em cada post:

```yaml
---
title: 'Título do artigo'
description: 'Resumo curto usado na listagem e em SEO.'
date: '2026-08-25' # formato ISO (YYYY-MM-DD)
slug: nome-do-arquivo # deve bater com o nome do arquivo .mdx
author: 'Nome do autor'
category: 'Backend'
level: 'Beginner' # Beginner | Intermediate | Advanced
tags:
  - exemplo
  - tags
---
```

## Getting Started

### Instalando as dependências

```bash
npm install
```

### Rodando em desenvolvimento

```bash
npm run dev
```

Ou, para observar mudanças nos arquivos `.mdx` e recarregar automaticamente:

```bash
npm run dev:watch
```

### Build de produção

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Envio de artigos (`/submit`)

A página [`/submit`](pages/submit.js) é um formulário para enviar um artigo
para revisão. Ela monta um arquivo `.mdx` (frontmatter + conteúdo) a partir
dos campos preenchidos e envia para o
[Content Submission Service](https://github.com/sancruz-dev/microservice-submission-blog),
que valida o conteúdo e conduz o workflow de curadoria.

Para funcionar em desenvolvimento, o serviço precisa estar rodando (por
padrão em `http://localhost:5080`; configurável via
`NEXT_PUBLIC_SUBMISSION_SERVICE_URL` no `.env`). Sem o serviço no ar, o
formulário mostra uma mensagem de erro de conexão.

## Deploy

O deploy é feito na [Vercel](https://vercel.com/), com suporte nativo ao
Next.js. Cada push no branch principal gera um novo build estático do
site.

## Roadmap

O projeto está evoluindo de um blog pessoal estático para uma plataforma
colaborativa de publicação técnica, com submissão de artigos por terceiros,
curadoria humana e publicação automatizada via Pull Request. Essa evolução
está sendo documentada progressivamente em `docs/` conforme avança.

## Autor

- **Sanmir Cruz**

## Licença

Este projeto está licenciado sob a licença MIT — veja o arquivo
[LICENSE.md](./LICENSE.md) para mais detalhes.
