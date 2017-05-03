module.exports = {
  type: 'react-app',
  babel: {
    plugins: process.env.NODE_ENV === 'test' ? ['istanbul'] : []
  }
};
