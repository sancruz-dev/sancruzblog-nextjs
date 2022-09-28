module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*'
      },
      {
        source: '/:path*',
        destination: `${DIST_URL}/:path*`
      },
      {
        source: '/',
        destination: `${DIST_URL}`
      },
    ]
  }
}