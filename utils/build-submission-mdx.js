// Assembles a submission's form fields into a single .mdx file (YAML
// frontmatter + body) matching exactly what the Content Submission
// Service expects (see content-submission-service/docs/architecture.md
// "Contrato de frontmatter da submissão"). The frontmatter is the single
// source of truth on the backend, so this is the one place the frontend
// is allowed to construct it - nothing downstream re-derives it from
// separate fields.

export const slugify = (text) =>
  text
    .toString()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // strip accents (combining diacritical marks)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const yamlScalar = (value) =>
  `"${String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\s+/g, ' ').trim()}"`;

export const parseTags = (rawTags) =>
  rawTags
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);

export const buildSubmissionMdx = ({
  title,
  description,
  slug,
  author,
  category,
  level,
  tags,
  body,
}) => {
  const tagList = parseTags(tags);
  const tagsBlock =
    tagList.length > 0
      ? ['tags:', ...tagList.map((tag) => `  - ${yamlScalar(tag)}`)].join('\n')
      : 'tags: []';

  const frontMatter = [
    '---',
    `title: ${yamlScalar(title)}`,
    `description: ${yamlScalar(description)}`,
    `slug: ${slugify(slug)}`,
    `author: ${yamlScalar(author)}`,
    `category: ${yamlScalar(category)}`,
    `level: ${level}`,
    tagsBlock,
    '---',
  ].join('\n');

  return `${frontMatter}\n\n${body.trim()}\n`;
};
