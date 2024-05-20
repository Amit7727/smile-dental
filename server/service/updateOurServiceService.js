const { pool } = require('../model/connection')
const getUpdatedTime = require('../helper/getUpdatedTime')

// update our service by id. service_name , 
// service_image, service_description, updated_at, image_alt_text

module.exports = async (req, res) => {
    const id = req.params.id
    const { service_name, service_image, service_description, image_alt_text } = req.body
    const updated_at = getUpdatedTime()

    const query = `UPDATE our_services SET service_name = '${service_name}', service_image = '${service_image}', service_description = '${service_description}', image_alt_text = '${image_alt_text}', updated_at = '${updated_at}' WHERE id = ${id}`

    pool.query(query, (err, result) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            return res.status(200).json({ message: 'Our service updated successfully' })
        }
    })
}