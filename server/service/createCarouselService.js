const { pool } = require('../model/connection')
module.exports = async (req, res) => {
    uploadImageS3(req, res)
        .then(location => {
            console.log('File uploaded to:', location);
            const { title, description, pageName, image_alt_text } = req.body
            const query = `INSERT INTO carousel(title, description, image, page_name, image_alt_text) VALUES('${title}', '${description}', '${location}', '${pageName}', '${image_alt_text}')`
            pool.query(query, (err, result) => {
                if (err) {
                    res.status(500).json({ error: err })
                } else {
                    return res.status(200).json({ message: 'Carousel created successfully' })
                }
            })
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Error uploading file to S3.');
        });
}