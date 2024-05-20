// "id": 1,
//         "blog_title": "The Most important Ventilator Equipment available",
//         "blog_image": "blog_image URL",
//         "blog_description": "Medical Futurist is one of the best online resources for learning about technology in the…",
//         "blog_image_alt_text": "",
//         "created_by": "admin",
//         "image_alt_text": "image alt text"


const { pool } = require('../model/connection')

module.exports = async (req, res) => {
    const { blog_title, blog_description, blog_image, blog_image_alt_text, created_by } = req.body

    const query =  `INSERT INTO blogs (blog_title, blog_description, blog_image, blog_image_alt_text, created_by) VALUES ('${blog_title}', '${blog_description}', '${blog_image}', '${blog_image_alt_text}', '${created_by}')`

    pool.query(query, (err, result) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            return res.status(200).json({ message: 'Blog created successfully' })
        }
    })
}
