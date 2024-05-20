const { pool } = require('../model/connection')
const getUpdatedTime = require('../helper/getUpdatedTime')
module.exports = async (req, res) => {
    const id = req.params.id
    const updated_at = getUpdatedTime()
    const { page_name, card_logo, card_logo_alt_text, card_title, card_description1, card_description2 } = req.body

    const query = `UPDATE cards SET page_name = '${page_name}', card_logo = '${card_logo}', card_logo_alt_text = '${card_logo_alt_text}', card_title = '${card_title}', card_description1 = '${card_description1}', card_description2 = '${card_description2}', updated_at = '${updated_at}' WHERE id = ${id}`
    console.log(query);
    pool.query(query, (err, result) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            return res.status(200).json({ message: 'Card updated successfully' })
        }
    })
}