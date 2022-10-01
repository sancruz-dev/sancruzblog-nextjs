module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*' 
      },
      {
        source: '/:path*',
        destination: `${process.env.BASE_URL}/:path*`
      }, 
      {
        source: '/',
        destination: `${process.env.BASE_URL}`
      },
    ]
  }
}