export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Sancruz Blog';
  const blogTitle = process.env.BLOG_TITLE 
    ? decodeURI(process.env.BLOG_TITLE)
    : ' tecnologia!'

  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : '© Sancruz-dev. Todos os direitos reservados';

  return {
    name,
    blogTitle,
    footerText,
  };
};
