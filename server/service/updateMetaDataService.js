const { pool } = require('../model/connection')
const getUpdatedTime = require('../helper/getUpdatedTime')

// update meta data by id. page_name, meta_title, meta_description, updated_at

module.exports = async (req, res) => {
    const id = req.params.id
    const { page_name, meta_title, meta_description } = req.body
    const updated_at = getUpdatedTime()

    const query = `UPDATE meta_data SET page_name = '${page_name}', meta_title = '${meta_title}', meta_description = '${meta_description}', updated_at = '${updated_at}' WHERE id = ${id}`
    pool.query(query, (err, result) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            return res.status(200).json({ message: 'Meta data updated successfully' })
        }
    })
}