export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'SanCruz Blog';

  const blogTitle = process.env.BLOG_TITLE 
    ? decodeURI(process.env.BLOG_TITLE)
    : ' tecnologia!'

  const seoDesc = process.env.SEO_DESC
    ? decodeURI(process.env.SEO_DESC)
    : `Assim como o oxigênio, a tecnologia é crucial para nossa vida, pois com ela, "respiramos até de baixo d'água". Entre e mergulhe, explore e conheça.`

  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : '© Sancruz-dev. Todos os direitos reservados';

  return {
    name,
    blogTitle,
    footerText,
    seoDesc
  };
};
