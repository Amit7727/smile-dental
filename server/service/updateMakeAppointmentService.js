const { pool } = require('../model/connection')
const getUpdatedTime = require('../helper/getUpdatedTime')
const { uploadImageS3 } = require('../helper/aws/uploadImageS3')

module.exports = async (req, res) => {
    uploadImageS3(req, res)
        .then(location => {
            console.log('File uploaded to:', location);
            const id = req.params.id
            const updated_at = getUpdatedTime()
            const { heading, description, image_alt_text } = req.body
            const query = 'UPDATE make_appointment_card SET image = ?, heading = ?, description = ?, image_alt_text = ?, updated_at = ? WHERE id = ?'
            pool.query(query, [location, heading, description, image_alt_text, updated_at, id], (err, result) => {
                if (err) {
                    res.status(500).json({ error: err })
                } else {
                    return res.status(200).json({ message: 'make appointment card updated successfully' })
                }
            })
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Error uploading file to S3.');
        });
}