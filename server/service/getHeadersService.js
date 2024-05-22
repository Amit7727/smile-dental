const { pool } = require('../model/connection')
const { convertGetHeaderResponse } = require('../helper/responseConverter')

module.exports = async (req, res) => {
    const query = 'SELECT * FROM headers'
    pool.query(query,(err, result) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            const convertedResponse = convertGetHeaderResponse(result)
            return res.status(200).json(convertedResponse)
        }
    })
}