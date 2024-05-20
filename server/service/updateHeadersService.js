const { pool } = require('../model/connection')
const getUpdatedTime = require('../helper/getUpdatedTime')

module.exports = async (req, res) => {
    const id = req.params.id
    const { page_name, page_url, logo_image, logo_image_alt_text } = req.body
    const updated_at = getUpdatedTime()

    const query = `UPDATE headers SET page_name = '${page_name}', page_url = '${page_url}', logo_image = '${logo_image}', logo_image_alt_text = '${logo_image_alt_text}', updated_at = '${updated_at}' WHERE id = ${id}`

    pool.query(query, (err, result) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            return res.status(200).json({ message: 'Headers updated successfully' })
        }
    })
}