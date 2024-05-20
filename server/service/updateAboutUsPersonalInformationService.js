        // name": "Jordan Peele",
        // "specially": "CARDIOLOGIST",
        // "phone_number": "+ (123) 1800-567-8990",
        // "email": "noreply@pbmit.com",
        // "experience": "7 years, New York Urgent Medical Care Serving California",
        // "degrees": "MBBS University of California",
        // "professional_summary": "Here’s a situation that comes up for many people: you move in later life. For most older adults, establishing a good working relationship with a new doctor is a challenge. If nothing else, it can take some time to feel that each party knows and understands the other. And they leave it to the new doctors to request health information from the previous doctors, which often arrives well after that first new patient visit. In this post, I’ll share my list of the most useful health information",
        // "image": "https://smile-dental.com/images/logo.png",
        // "image_alt_text": "image alt",
        // "updated_at": "2022-06-29 16:58:19.000000"

const { pool } = require('../model/connection')
const getUpdatedTime = require('../helper/getUpdatedTime')

// update our service by id. name, specially, phone_number, 
// email, experience, degrees, professional_summary, image, image_alt_text, updated_at

module.exports = async (req, res) => {
    const id = req.params.id
    const { name, specially, phone_number, email, experience, degrees, professional_summary, image, image_alt_text } = req.body
    const updated_at = getUpdatedTime()

    const query = `UPDATE personal_information SET  name = '${name}', specially = '${specially}', phone_number = '${phone_number}', email = '${email}', experience = '${experience}', degrees = '${degrees}', professional_summary = '${professional_summary}', image = '${image}', image_alt_text = '${image_alt_text}', updated_at = '${updated_at}' WHERE id = ${id}`
    console.log(query)
    pool.query(query, (err, result) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            return res.status(200).json({ message: 'Personal information updated successfully' })
        }
    })
} 