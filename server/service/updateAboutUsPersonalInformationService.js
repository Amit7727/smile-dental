const { pool } = require('../model/connection')
const getUpdatedTime = require('../helper/getUpdatedTime')
const { uploadImageS3 } = require('../helper/aws/uploadImageS3')


module.exports = async (req, res) => {
    uploadImageS3(req, res)
        .then(location => {
            console.log('File uploaded to:', location);
            const id = req.params.id
            const { name, specially, phone_number, email, experience, degrees, professional_summary, image_alt_text } = req.body
            const updated_at = getUpdatedTime()

            const query = `UPDATE personal_information SET  name = '${name}', specially = '${specially}', phone_number = '${phone_number}', email = '${email}', experience = '${experience}', degrees = '${degrees}', professional_summary = '${professional_summary}', image = '${location}', image_alt_text = '${image_alt_text}', updated_at = '${updated_at}' WHERE id = ${id}`
            console.log(query)
            pool.query(query, (err, result) => {
                if (err) {
                    res.status(500).json({ error: err })
                } else {
                    return res.status(200).json({ message: 'Personal information updated successfully' })
                }
            })
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Error uploading file to S3.');
        });
} 