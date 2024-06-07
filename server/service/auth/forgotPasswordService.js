const { pool } = require('../../model/connection')
const { sendEmail } = require('../../helper/sendEmail')

module.exports = async (req, res) => {
    const { email } = req.body
    if (email === '' || email === undefined || email === null) {
        return res.status(400).json({ error: 'email is required' })
    }
   
    const query = `SELECT * FROM users WHERE email = '${email}'`
    await pool.query(query, async (err, result) => {
        console.log(result)
        if (err) {
            res.status(500).json({ error: err })
        } else if (result.length === 0) {
            return res.status(404).json({ error: 'User not found' })
        } else {
            // await sendEmail("Body", email, 'Subject')
            return res.status(200).json({ message: 'User found' })
        }
    })
}