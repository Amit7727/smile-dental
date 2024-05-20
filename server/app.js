'use strict'

const config = require('config')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const middlerware = require('./middleware')
const router = require('./routers')
const basePath = config.get('basePath')
const cors = require('cors')
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.disable('x-powered-by')
app.use(express.json())
app.use(cookieParser())
app.use(basePath, router)
app.use(middlerware.notFoundErrorHandler())
app.use(middlerware.catchAllErrorHandlerMiddleware())
module.exports = app