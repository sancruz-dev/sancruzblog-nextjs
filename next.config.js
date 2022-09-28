module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*'
      },
      {
        source: '/:path*',
        destination: 'https://sancruz.vercel.app/:path*'
      },
      {
        source: '/',
        destination: 'https://sancruz.vercel.app'
      },
    ]
  }
}