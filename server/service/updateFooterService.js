const { pool } = require('../model/connection')
const getUpdatedTime = require('../helper/getUpdatedTime')

module.exports = async (req, res) => {
    const id = req.params.id
    const { title, image, image_alt_text, description } = req.body
    const updated_at = getUpdatedTime()

    const query = `UPDATE footer SET title = '${title}', image = '${image}', image_alt_text = '${image_alt_text}', description = '${description}', updated_at = '${updated_at}' WHERE id = ${id}`

    pool.query(query, (err, result) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            return res.status(200).json({ message: 'Footer updated successfully' })
        }
    })
}