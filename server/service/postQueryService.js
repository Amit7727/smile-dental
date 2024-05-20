const { pool } = require('../model/connection')

module.exports = async (req, res) => {
    const { name, email,phone_number,subject, message } = req.body
    const query = `INSERT INTO query_form (name, email,phone_number,subject, message) VALUES ('${name}', '${email}','${phone_number}','${subject}','${message}')`
    pool.query(query,(err, result) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            return res.status(200).json({ message: 'Query submitted successfully' })
        }
    })
}