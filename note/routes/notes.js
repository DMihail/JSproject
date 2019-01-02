const express = require('express');
const router = express.Router();
const  Post = require('.,/models/note');


router.get('/', async (req, res) =>{
    const notes = await  Post.find({});
    res.status(200).join(notes);
});

router.post('/', async (req, res) =>{

   const notesdata = {
       title: req.body.title,
       realisation: req.body.text,
       data: req.body.text
   };

   const  note = new Post(notesdata);
   await  note.save();
    res.status(201).join(note);
});

router.delete('/', (req, res) =>{

});

module.exports = router;

