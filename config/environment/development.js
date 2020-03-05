module.exports = {
  server: {
    port: process.env.batchServicePort || 3056,
    host: process.env.batchServiceHost || '127.0.0.1',
    url: `http://${process.env.batchServiceHost || '127.0.0.1'} :${process.env.batchServicePort || '3006'}`,
    isProd: false
  },
  database: {
    uri: process.env.uri || 'mongodb://10.0.1.198:27017,10.0.2.182:27017,10.0.2.114:27017/SDMSUat?replicaSet=SDMSUat',
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
    trancheService: "http://localhost:1044/api/v1/tranche/blocklisttranche",
    emailService : "https://sdmsservices.nsdcindia.org/api/v1/comm/node/email",
    userService : "http://localhost:3000/api/user/v1/",
    userServiceBatch: "http://localhost:3000/api/batch/v1/pmkvy/"
  },
  securityDetails: {
    secretKey: 'transneuron',
    whitelistIPs: []
  },
  controls: {
    email: false,
  },
  others: {
    enableEmail: true,
  }

}
