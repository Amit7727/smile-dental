'use strict'

const notFoundErrorHandler = require('./not-found-error-handler')
const catchAllErrorHandlerMiddleware = require('./catch-all-error-handler')

module.exports = {
    notFoundErrorHandler,
    catchAllErrorHandlerMiddleware
}