module.exports = {
  server: {
    port: process.env.batchServicePort || 3056,
    host: process.env.batchServiceHost || '127.0.0.1',
    url: `http://${process.env.batchServiceHost || '127.0.0.1'} :${process.env.batchServicePort || '3006'}`,
    isProd: false
  },
  database: {
    uri: process.env.uri || '',
    auth: process.env.auth || { user: 'testuser', password: 'testuser123' },
    withoutAuth: 'mongodb://localhost:27017/loginProject',
    isProd: false
  },
  aws: {
  },
  paths: {
  },
  externalServices: {
    authService: 'http://localhost:3001/api/auth',
  },
  securityDetails: {
    secretKey: '%$WYCYHG^%HUI*',
    whitelistIPs: []
  },
  controls: {
    email: false,
  },
  others: {
    enableEmail: true,
  }

}
