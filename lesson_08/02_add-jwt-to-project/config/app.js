module.exports = {
  jwt: {
    tokens: {
      access: {
        type: 'access',
        expiresIn: '1m',
      },
      refresh: {
        type: 'refresh',
        expiresIn: '10m',
      },
    },
  },
}
