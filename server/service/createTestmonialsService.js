const { pool } = require('../model/connection')
const {uploadImageS3} = require('../helper/aws/uploadImageS3')

module.exports = async (req, res) => {
    uploadImageS3(req, res)
    .then(location => {
        console.log('File uploaded to:', location);
        const { client_name, client_rating, client_feedback, client_feedback_description, client_image_alt_text } = req.body
    const query = 'INSERT INTO testimonials (client_name, client_image, client_rating, client_feedback, client_feedback_description, client_image_alt_text) VALUES (?, ?, ?, ?, ?, ?)'
    const values = [client_name, location, client_rating, client_feedback, client_feedback_description, client_image_alt_text]
    pool.query(query, values, (err, result) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            return res.status(200).json({ message: 'testmonial created successfully' })
        }
    })
    })
    .catch(error => {
        console.error('Error:', error);
        res.status(500).send('Error uploading file to S3.');
    });

    
}