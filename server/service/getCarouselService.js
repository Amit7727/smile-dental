const {pool} = require('../model/connection')

module.exports = async (req, res) => {
    const query = `SELECT * FROM carousel`
    pool.query(query,(err, result) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            return res.status(200).json(result)
        }
    })
}