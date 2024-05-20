'use strict'

const http = require('http')

const notFoundErrorHandler = () => (req, res, next) => {
    const error = new Error('Not Found')
    error.status = http.STATUS_CODES[404],
    error.message = 'Requested resource not found'
    next(error)
}

module.exports = notFoundErrorHandler