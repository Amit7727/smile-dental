
const { pool } = require('../model/connection')
const getUpdatedTime = require('../helper/getUpdatedTime')

const { uploadImageS3 } = require('../helper/aws/uploadImageS3')

module.exports = async (req, res) => {

    uploadImageS3(req, res)
        .then(location => {
            console.log('File uploaded to:', location);
            const id = req.params.id
            const updated_at = getUpdatedTime()
            const { title, description,back_image, front_image_alt_text, back_image_alt_text } = req.body
            const query = `UPDATE about_us SET title = '${title}', description = '${description}',
  front_image = '${location}', back_image = '${back_image}', front_image_alt_text = '${front_image_alt_text}', back_image_alt_text = '${back_image_alt_text}', updated_at = '${updated_at}' WHERE id = ${id}`
            pool.query(query, (err, result) => {
                if (err) {
                    res.status(500).json({ error: err })
                } else {
                    return res.status(200).json({ message: 'About us updated successfully' })
                }
            })

        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Error uploading file to S3.');
        });


} 