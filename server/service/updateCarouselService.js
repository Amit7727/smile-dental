const { pool } = require('../model/connection')
const getUpdatedTime = require('../helper/getUpdatedTime')
const logger = require('winston').loggers.get('app')

module.exports = async (req, res) => {
    const id = req.params.id
    const updated_at = getUpdatedTime()
    const { title, description, image, page_name, image_alt_text } = req.body
    console.log(req.body)
    logger.info('smile-dental update req body',req.body)
    const query = `UPDATE carousel SET title = '${title}', description = '${description}', image = '${image}', page_name = '${page_name}', image_alt_text = '${image_alt_text}', updated_at = '${updated_at}' WHERE id = ${id}`

    pool.query(query, (err, result) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            return res.status(200).json({ message: 'Carousel updated successfully' })
        }
    })
}