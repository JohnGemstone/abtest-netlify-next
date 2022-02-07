module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/product-landing',
        destination: '/dynamic-routes/product-1',
      },
    ]
  },
}
