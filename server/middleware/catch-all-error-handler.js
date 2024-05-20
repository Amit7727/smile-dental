'use strict'

const catchAllErrorHandlerMiddleware = () =>(error, req, res, next) => {
    const notFoundError = {
        title: error.message
    }

    const response = notFoundError

    res.status(404).json(response)
}

module.exports = catchAllErrorHandlerMiddleware