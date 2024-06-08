const { pool } = require('../model/connection')
const { validatePostQueryBody } = require('../helper/fieldValidation')
const { sendEmail } = require('../helper/sendEmail')

module.exports = async (req, res) => {
    const { name, email,phone_number,subject, message } = req.body
    const err = validatePostQueryBody(req, res)
    if(err.length > 0) {
        return res.status(400).json({ error: err })
    }
    const query = `INSERT INTO query_form (name, email,phone_number,subject, message) VALUES ('${name}', '${email}','${phone_number}','${subject}','${message}')`
    pool.query(query,(err, result) => {
        if (err) {
            res.status(500).json({ error: err })
        } else {
            const body = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8" />
                <style type="text/css">
                    table {
                        background: white;
                        border-radius: 3px;
                        border-collapse: collapse;
                        height: auto;
                        max-width: 900px;
                        padding: 5px;
                        width: 100%;
                        animation: float 5s infinite;
                    }
            
                    th {
                        border-bottom: 4px solid #9ea7af;
                        border-left: 1px solid #C1C3D1;
                        font-size: 14px;
                        font-weight: 300;
                        padding: 10px;
                        text-align: center;
                        vertical-align: middle;
                    }
            
                    tr {
                        border-top: 1px solid #C1C3D1;
                        border-bottom: 1px solid #C1C3D1;
                        border-left: 1px solid #C1C3D1;
                        font-size: 16px;
                        font-weight: normal;
                    }
            
                    tr:hover td {
                        background: #4E5066;
                        color: #FFFFFF;
                        border-top: 1px solid #22262e;
                    }
            
                    td {
                        background: #FFFFFF;
                        padding: 10px;
                        text-align: left;
                        vertical-align: middle;
                        font-weight: 300;
                        font-size: 13px;
                        border-right: 1px solid #C1C3D1;
                    }
        
                    .footer {
                        clear: both;
                        padding-top: 24px;
                        text-align: center;
                        width: 100%;
                      }
                      
                      .footer td,
                      .footer p,
                      .footer span,
                      .footer a {
                        color: #9a9ea6;
                        font-size: 16px;
                        text-align: center;
                      }
                </style>
            </head>
            
            <body>
                <h4> This is auto generated mail by smileCloud.</h4>
                <table>
                    <thead>
                        <tr style="border: 1px solid #1b1e24;">
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Subject</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${req.body.name}</td>
                            <td>${req.body.email}</td>
                            <td>${req.body.phone_number}</td>
                            <td>${req.body.subject}</td>
                            <td>${req.body.message}</td>
                        </tr>
                    </tbody>
                </table>
                <br>
                <div class="footer">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td class="content-block">
                            <span class="apple-link">2750 West Northwest Hwy, Suite 210,
                            Dallas, TX 75220</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="content-block powered-by">
                            Powered by <a href="https://smile-dental-frontend.vercel.app/">SmileCloud</a>
                          </td>
                        </tr>
                      </table>
                    </div>
            </body>
            
            </html>
        `
        const to = process.env.SEND_MAIL_TO  ||  "info@smilecloudfamilydental.com"
        const subject = 'A query has been submitted by ' + req.body.name
            sendEmail(`<h1>Query submitted</h1>
            <p>${body}</p>`, to, subject)
            return res.status(200).json({ message: 'Query submitted successfully' })
        }
    })
}