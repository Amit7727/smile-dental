const { pool } = require('../model/connection')
const getUpdatedTime = require('../helper/getUpdatedTime')

// update award by id. description, award_year, award_description, updated_at
module.exports = async (req, res) => {
    const id = req.params.id
    const { description, award_year, award_description } = req.body
    let now = new Date();

// Format the date in YYYY-MM-DD HH:mm:ss format
let formattedDate =  getUpdatedTime()
console.log(formattedDate)

const query = `UPDATE awardsAndHonours SET description = '${description}', award_year = '${award_year}', award_description = '${award_description}', updated_at = '${formattedDate}' WHERE id = ${id}`

    pool.query(query, (err, result) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            return res.status(200).json({ message: 'Award updated successfully' })
        }
    })
}