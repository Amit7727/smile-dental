const { pool } = require('../model/connection')
const { validateRegisterUser } = require('../helper/fieldValidation')
const bycrypt = require('bcrypt')
// create a function to register user in database but check if user already exists

module.exports = async (req, res) => {
    const err = validateRegisterUser(req, res)
    if (err.length > 0) return res.status(400).json({ error: err })

    const { first_name,last_name, email, password, full_name, phone_number } = req.body

    const alreadyExists = `SELECT * FROM users WHERE email = '${email}'`

    await pool.query(alreadyExists, async (err, result) => {

        if (err) {
            res.status(500).json({ error: err })
        }
        else if (result.length > 0) {
            res.status(400).json({ message: 'User already exists' })
        }
        else {

            const hashedPassword = await bycrypt.hash(password, 10)
            const query = `INSERT INTO users (first_name,last_name, email, password, full_name, mobile_number) VALUES ('${first_name}','${last_name}', '${email}','${hashedPassword}','${full_name}','${phone_number}')`

            await pool.query(query, (err, result) => {

                if (err) {
                    res.status(500).json({ error: err })
                }
                else {
                    res.status(200).json({ message: 'User created successfully' })
                }
            })
        
    }
})
    
}