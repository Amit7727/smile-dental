const { pool } = require('../model/connection')
const getUpdatedTime = require('../helper/getUpdatedTime')
const logger = require('winston').loggers.get('app')
const { uploadImageS3 } = require('../helper/aws/uploadImageS3')
const { validateUpdateCarousel } = require('../helper/fieldValidation')


module.exports = async (req, res) => {
    const err = validateUpdateCarousel(req, res)
    if (err.length > 0) return res.status(400).json({ error: err })
    uploadImageS3(req, res)
        .then(location => {
            console.log('File uploaded to:', location);
            const id = req.params.id
            const updated_at = getUpdatedTime()
            const { title, description, page_name, image_alt_text } = req.body
            console.log(req.body)
            logger.info('smile-dental update req body', req.body)
            const query = `UPDATE carousel SET title = '${title}', description = '${description}', image = '${location}', page_name = '${page_name}', image_alt_text = '${image_alt_text}', updated_at = '${updated_at}' WHERE id = ${id}`

            pool.query(query, (err, result) => {
                if (err) {
                    res.status(500).json({ error: err })
                } else {
                    return res.status(200).json({ message: 'Carousel updated successfully' })
                }
            })
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Error uploading file to S3.');
        });
}