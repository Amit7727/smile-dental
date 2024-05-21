const { pool } = require('../model/connection')
const getUpdatedTime = require('../helper/getUpdatedTime')
const { uploadImageS3 } = require('../helper/aws/uploadImageS3')


module.exports = async (req, res) => {
    uploadImageS3(req, res)
        .then(location => {
            console.log('File uploaded to:', location);
            const id = req.params.id
            const { page_name, page_url, logo_image_alt_text } = req.body
            const updated_at = getUpdatedTime()

            const query = `UPDATE headers SET page_name = '${page_name}', page_url = '${page_url}', logo_image = '${location}', logo_image_alt_text = '${logo_image_alt_text}', updated_at = '${updated_at}' WHERE id = ${id}`

            pool.query(query, (err, result) => {
                if (err) {
                    res.status(500).json({ error: err })
                } else {
                    return res.status(200).json({ message: 'Headers updated successfully' })
                }
            })
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Error uploading file to S3.');
        });
}