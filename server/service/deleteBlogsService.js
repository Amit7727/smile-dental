const { pool }  = require('../model/connection')

module.exports = async (req, res) => {
    const id = req.params.id
    const query = `DELETE FROM blogs WHERE id = ${id}`
    pool.query(query, (err, result) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            return res.status(200).json({ message: 'Blog deleted successfully' })
        }
    })
}