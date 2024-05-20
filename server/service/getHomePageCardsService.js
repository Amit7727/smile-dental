const {pool} = require('../model/connection'); // Assuming you have your MySQL connection pool in this file

module.exports = (req, res) => {
    const query1 = `SELECT * FROM cards WHERE page_name = 'home'`;
    const query2 = `SELECT * FROM schedule_hours`;

        pool.query(query1, (err1, result1) => {
            if (err1) {
                connection.release();
                console.error('Error executing query 1:', err1);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            pool.query(query2, (err2, result2) => {

                if (err2) {
                    console.error('Error executing query 2:', err2);
                    res.status(500).json({ error: 'Internal server error' });
                    return;
                }

                // Combine the results into one object
                const combinedResult = {
                    schedule_hours: result2,
                    location_cards: result1
                };

                res.json(combinedResult);
            });
        });
};
