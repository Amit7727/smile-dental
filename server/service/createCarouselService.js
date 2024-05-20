const { pool } = require('../model/connection')
module.exports = async (req, res) => {
    const { title, description, image, pageName,image_alt_text } = req.body
    const query = `INSERT INTO carousel(title, description, image, page_name, image_alt_text) VALUES('${title}', '${description}', '${image}', '${pageName}', '${image_alt_text}')`
    await pool.query(query,(err, result) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            return res.status(200).json({ message: 'Carousel created successfully' })
        }
    })
}