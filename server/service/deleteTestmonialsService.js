const { pool } = require('../model/connection')

module.exports = async (req, res) => {
    const query = `DELETE FROM testimonials WHERE id = ${req.params.id}`

    console.log(query);
    pool.query(query, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message })
            return
        }
        res.status(200).json({ message: 'testmonial deleted successfully' })
    })
}