module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*'
      },
      {
        source: '/:path*',
        destination: 'https://sanportfolio.vercel.app/:path*'
      },
      {
        source: '/',
        destination: 'https://sanportfolio.vercel.app'
      },
    ]
  }
}