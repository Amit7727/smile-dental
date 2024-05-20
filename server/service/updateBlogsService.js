const { pool } = require('../model/connection')
const getUpdatedTime = require('../helper/getUpdatedTime')

// update blog by id. blog_title, blog_description, updated_at, blog_image, image_alt_text

module.exports = async (req, res) => {
    const id = req.params.id
    const { blog_title, blog_description, blog_image, blog_image_alt_text } = req.body
    const updated_at = getUpdatedTime()

    const query = `UPDATE blogs SET blog_title = '${blog_title}', blog_description = '${blog_description}', blog_image = '${blog_image}', blog_image_alt_text = '${blog_image_alt_text}', updated_at = '${updated_at}' WHERE id = ${id}`

    pool.query(query, (err, result) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            return res.status(200).json({ message: 'Blog updated successfully' })
        }
    })
}