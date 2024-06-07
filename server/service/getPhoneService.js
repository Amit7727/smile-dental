const { pool } = require('../model/connection')

module.exports = (req, res) => {

    pool.query('SELECT * FROM phone', (err, result) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            return res.status(200).json(result)
        }
    })
}