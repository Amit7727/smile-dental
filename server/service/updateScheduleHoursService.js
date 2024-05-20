const { pool } = require('../model/connection')
const getUpdatedTime = require('../helper/getUpdatedTime')

// update schedule hours by id. title, start_day, end_day, start_time, end_time
module.exports = async (req, res) => {
    console.log(req.body.title)
    const { title, start_day, end_day, start_time, end_time} = req.body
    const query = `UPDATE schedule_hours SET title = '${title}', start_day = '${start_day}', end_day = '${end_day}', start_time = '${start_time}', end_time = '${end_time}', updated_at = '${getUpdatedTime()}' WHERE id = ${req.params.id}`
    console.log(query)
    pool.query(query, (err, result) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            return res.status(200).json({ message: 'Schedule hours updated successfully' })
        }
    })
}