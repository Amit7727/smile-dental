const { pool } = require('../model/connection')
const getUpdatedTime = require('../helper/getUpdatedTime')
const { uploadImageS3 } = require('../helper/aws/uploadImageS3')


module.exports = async (req, res) => {
    uploadImageS3(req, res)
        .then(location => {
            console.log('File uploaded to:', location);
            const id = req.params.id
            const updated_at = getUpdatedTime()
            const { page_name, card_logo_alt_text, card_title, card_description1, card_description2 } = req.body

            const query = `UPDATE cards SET page_name = '${page_name}', card_logo = '${location}', card_logo_alt_text = '${card_logo_alt_text}', card_title = '${card_title}', card_description1 = '${card_description1}', card_description2 = '${card_description2}', updated_at = '${updated_at}' WHERE id = ${id}`
            console.log(query);
            pool.query(query, (err, result) => {
                if (err) {
                    res.status(500).json({ error: err })
                } else {
                    return res.status(200).json({ message: 'Card updated successfully' })
                }
            })
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Error uploading file to S3.');
        });
}