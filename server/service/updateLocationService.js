const { pool } = require('../model/connection')
const getUpdatedTime = require('../helper/getUpdatedTime')
module.exports = async (req, res) => {
    const id = req.params.id
    const { tag } = req.body
    console.log(tag)
    const updated_at = getUpdatedTime()

    const query = `UPDATE locations SET tag = '${tag}', updated_at = '${updated_at}' WHERE id = ${id}`

    pool.query(query, (err, result) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            return res.status(200).json({ message: 'Location updated successfully' })
        }
    })
}