const { pool } = require('../model/connection')
const { uploadImageS3 } = require('../helper/aws/uploadImageS3')
const { validateCreateUpdateBlog } = require('../helper/fieldValidation')


module.exports = async (req, res) => {
    const err = validateCreateUpdateBlog(req, res)
    if (err.length > 0) return res.status(400).json({ error: err })
    uploadImageS3(req, res)
        .then(location => {
            console.log('File uploaded to:', location);
            const { blog_title, blog_description, blog_image_alt_text, created_by } = req.body
            const query = `INSERT INTO blogs (blog_title, blog_description, blog_image, blog_image_alt_text, created_by) VALUES ('${blog_title}', '${blog_description}', '${location}', '${blog_image_alt_text}', '${created_by}')`
            pool.query(query, (err, result) => {
                if (err) {
                    res.status(500).json({ error: err })
                } else {
                    return res.status(200).json({ message: 'Blog created successfully' })
                }
            })
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Error uploading file to S3.');
        });
}
