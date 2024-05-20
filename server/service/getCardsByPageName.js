const { pool } = require('../model/connection')

module.exports = async (req, res) => {
    const page_name = req.params.page_name

    const query = `SELECT * FROM cards WHERE page_name = '${page_name}'`

    pool.query(query, (err, result) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            return res.status(200).json(result)
        }
    })
}