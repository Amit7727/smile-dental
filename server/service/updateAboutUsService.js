
const { pool } = require('../model/connection')
const getUpdatedTime = require('../helper/getUpdatedTime')
const { validatePostAboutUs } = require('../helper/fieldValidation')
const { uploadImageS3 } = require('../helper/aws/uploadImageS3')
const { uploadSecondImageS3 } = require('../helper/aws/uploadSecondImage')


function uploadImage1(req, res){
    console.log('uploading 2nd image')
    uploadSecondImageS3(req, res)
        .then(location => {
            console.log('2nd image uploaded to:', location);
            const query = `UPDATE about_us SET back_image = '${location}' WHERE id = ${req.params.id}`
            pool.query(query, (err, result) => {
                if (err) {
                    res.status(500).json({ error: err.message })
                    return
                }
            })
            console.log('image 2 updated')
            return location
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Error uploading file to S3.');
        });
}

module.exports = async (req, res) => {
    const err = validatePostAboutUs(req, res)
    if(err.length > 0) return res.status(400).json({ error: err })
    uploadImageS3(req, res)
        .then(location => {
            console.log('File 1 uploaded to:', location);
            const id = req.params.id
            const updated_at = getUpdatedTime()
            uploadImage1(req, res)
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