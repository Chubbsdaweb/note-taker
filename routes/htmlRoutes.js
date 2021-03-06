const router = require("express").Router();
// defines variable for path to be used
const path = require("path");
// gets data and sends to index.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/notes.html'))
});
// sends response data to notes.html
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/index.html'))
});

module.exports = router;