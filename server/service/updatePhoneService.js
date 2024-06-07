const { pool } = require('../model/connection')

module.exports = (req, res) => {
    if(req.body.phone_number === '' || req.body.phone_number === undefined || req.body.phone_number === null) {
        return res.status(400).json({ error: 'phone_number number is required' })
    }
    const { phone_number } = req.body
    const query = `UPDATE phone SET phone_number = '${phone_number}' WHERE id = 1`

    pool.query(query, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message })
            return
        }
        res.status(200).json({ message: 'phone_number updated successfully' })
    })
     

}