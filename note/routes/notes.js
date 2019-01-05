const express = require('express');
const router = express.Router();
const  Note = require('../models/note');


router.get('/', async (req, res) =>{
    const notes = await Note.find({});
    res.status(200).json(notes);
});

router.post('/', async (req, res) =>{

   const notesdata = {
       task: req.body.task,
      // podtask: req.body.podtask,
      // realisation: req.body.text,
       data: req.body.data
   };

   const  note = new Note(notesdata);
   await  note.save();
    res.status(201).json(note);
});

router.delete('/:id', async (req, res) =>{
   await Note.remove({_id: req.params.id});
    res.status(200).json({
        message: 'Удалeно'
    })
});

module.exports = router;

