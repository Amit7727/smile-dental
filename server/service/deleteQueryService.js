const { pool } = require('../model/connection')

module.exports = async (req, res) => {
    const query = `DELETE FROM query_form WHERE id = ${req.params.id}`
    pool.query(query,(err, result) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            return res.status(200).json(result)
        }
    })
}