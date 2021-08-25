const router = require('express').Router();

const { newNotes } = require('../Develop/db/db.json');
const { savedNote } = require('../Develop/db/db.json');


router.get('/notes', (req, res) => {
    res.json(newNotes);
});

router.post('/notes', (req, res) => {
    let savedNote = req.body
    res.json(newNotes);
    saveNoted.push(newNotes);
    savedNote.writefnc(newNotes);
});

router.get('/notes/:id', (req, res) => {
    res.json(savedNote);
})

module.exports = router;