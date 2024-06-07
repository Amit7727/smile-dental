const { pool } = require('../model/connection')
const getUpdatedTime = require('../helper/getUpdatedTime')
const { validateUpdateLocation } = require('../helper/fieldValidation')
module.exports = async (req, res) => {
    const err  = validateUpdateLocation(req, res)
    if (err.length > 0) return res.status(400).json({ error: err })
    const id = req.params.id
    const { tag } = req.body
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