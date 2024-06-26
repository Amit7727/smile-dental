const { pool } = require('../model/connection')
const  getUpdatedTime  = require('../helper/getUpdatedTime')
const { uploadImageS3 } = require('../helper/aws/uploadImageS3')

    module.exports = async (req, res) => {
        if(req.body.image === '' || req.body.image === undefined || req.body.image === null) {
            return res.status(400).json({ error: 'image is required' })
        }
        uploadImageS3(req, res)
            .then(location => {
                console.log('File uploaded to:', location);
                const id = req.params.id
                const updated_at = getUpdatedTime()
                const query = `UPDATE image_gallery SET image = '${location}', updated_at = '${updated_at}' WHERE id = ${id}`
                pool.query(query, (err, result) => {
                    if (err) {
                        res.status(500).json({ error: err })
                    } else {
                        return res.status(200).json({ message: 'image gallery updated successfully' })
                    }
                })
            })
            .catch(error => {
                console.error('Error:', error);
                res.status(500).send('Error uploading file to S3.');
            });
    }