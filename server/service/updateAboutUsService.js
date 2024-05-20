// title
// description
// front_image
// back_image
// front_image_alt_text
// back_image_alt_text
// updated_at

const { pool } = require('../model/connection')
const getUpdatedTime = require('../helper/getUpdatedTime')

module.exports = async (req, res) => {
    const id = req.params.id
    const updated_at = getUpdatedTime()
    const { title, description, front_image, back_image, front_image_alt_text, back_image_alt_text } = req.body

    const query = `UPDATE about_us SET title = '${title}', description = '${description}',
  front_image = '${front_image}', back_image = '${back_image}', front_image_alt_text = '${front_image_alt_text}', back_image_alt_text = '${back_image_alt_text}', updated_at = '${updated_at}' WHERE id = ${id}`

    pool.query(query, (err, result) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            return res.status(200).json({ message: 'About us updated successfully' })
        }
    })
} 