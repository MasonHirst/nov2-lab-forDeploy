const path = require('path')


module.exports = {

    home: (req, res) => {
        res.sendFile(path.join(__dirname, '../../landing.html'))
    },

    style: (req, res) => {
        res.sendFile(path.join(__dirname, '../../landing.css'))
    },

    jScript: (req, res) => {
        res.sendFile(path.join(__dirname, '../../landing.js'))
    }
}