const { pool } = require('../model/connection')
const getUpdatedTime = require('../helper/getUpdatedTime')
const { uploadImageS3 } = require('../helper/aws/uploadImageS3')


// update blog by id. blog_title, blog_description, updated_at, blog_image, image_alt_text

module.exports = async (req, res) => {
    uploadImageS3(req, res)
        .then(location => {
            console.log('File uploaded to:', location);
            const id = req.params.id
            const { blog_title, blog_description, blog_image_alt_text } = req.body
            const updated_at = getUpdatedTime()
            const query = `UPDATE blogs SET blog_title = '${blog_title}', blog_description = '${blog_description}', blog_image = '${location}', blog_image_alt_text = '${blog_image_alt_text}', updated_at = '${updated_at}' WHERE id = ${id}`
            pool.query(query, (err, result) => {
                if (err) {
                    res.status(500).json({ error: err })
                } else {
                    return res.status(200).json({ message: 'Blog updated successfully' })
                }
            })
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Error uploading file to S3.');
        });
}