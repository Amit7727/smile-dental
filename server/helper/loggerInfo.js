// log information of requestor
// host, time, URL, HTTP method, ip address
// time and date should in different variables

module.exports = (req, res) => {
    return {
        host: req.headers.host,
        date: new Date().toLocaleString(),
        time: new Date().toLocaleTimeString(),
        url: req.originalUrl,
        method: req.method,
        ip_address: req.ip
    }
}