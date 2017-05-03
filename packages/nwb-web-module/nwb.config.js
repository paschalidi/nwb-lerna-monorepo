module.exports = {
  type: 'web-module',
  npm: {
    esModules: true,
    umd: false
  },
  babel: {
    plugins: process.env.NODE_ENV === 'test' ? ['istanbul'] : []
  }
};
