'use strict'

const config = require('config')
require('dotenv').config()
const logger = require('winston').loggers.get('app')
const app = require('./app')

const httpPort =process.env.PORT || config.get('server.httpPort')
const httpsPort = config.get('server.httpsPort')

app.listen(httpPort, () => logger.info(`smile-dental server started on ${httpPort}`))