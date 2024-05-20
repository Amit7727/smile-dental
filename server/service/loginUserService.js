const { pool } = require('../model/connection')

module.exports = async (req, res) => {
    const { email, password } = req.body
    const query = `SELECT * FROM users WHERE email = '${email}'`
    await pool.query(query, async (err, result) => {
        if (err) {
            res.status(500).json({ error: err })
        } else if (result.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }
        if (result[0].password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' })
        }
        return res.status(200).json({ message: 'Login successful' })
    })
}