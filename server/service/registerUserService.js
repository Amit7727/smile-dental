const { pool } = require('../model/connection')

// create a function to register user in database but check if user already exists

module.exports = async (req, res) => {

    const { first_name,last_name, email, password, full_name, mobile_number } = req.body

    const alreadyExists = `SELECT * FROM users WHERE email = '${email}'`

    await pool.query(alreadyExists, async (err, result) => {

        if (err) {
            res.status(500).json({ error: err })
        }
        else if (result.length > 0) {
            res.status(400).json({ message: 'User already exists' })
        }
        else {
            const query = `INSERT INTO users (first_name,last_name, email, password, full_name, mobile_number) VALUES ('${first_name}','${last_name}', '${email}','${password}','${full_name}','${mobile_number}')`

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