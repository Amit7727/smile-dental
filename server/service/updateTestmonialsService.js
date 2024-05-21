const { pool } = require('../model/connection')
const getUpdatedTime = require('../helper/getUpdatedTime')
const { uploadImageS3 } = require('../helper/aws/uploadImageS3')


module.exports = async (req, res) => {
    uploadImageS3(req, res)
        .then(location => {
            console.log('File uploaded to:', location);
            const id = req.params.id
            const { client_name, client_rating, client_feedback, client_feedback_description, client_image_alt_text } = req.body
            const updated_at = getUpdatedTime()

            const query = 'UPDATE testimonials SET client_name = ?, client_image = ?, client_rating = ?, client_feedback = ?, client_feedback_description = ?, client_image_alt_text = ?, updated_at = ? WHERE id = ?'
            const values = [client_name, location, client_rating, client_feedback, client_feedback_description, client_image_alt_text, updated_at, id]

            pool.query(query, values, (err, result) => {
                if (err) {
                    res.status(500).json({ error: err.message })
                    return
                }
                res.status(200).json({ message: 'testmonial updated successfully' })
            })
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Error uploading file to S3.');
        });
}