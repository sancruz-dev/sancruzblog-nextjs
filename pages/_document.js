import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br" className="theme-compiled">
        <Head />
        <body className={`antialiased text-lg bg-[#f6f9fe] dark:bg-[#0d1626] dark:text-white leading-base`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
