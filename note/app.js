const  express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const  notesRouter = require('./routes/notes');
const  keys = require('./keys');
const app = express();
app.use(bodyparser.json());
mongoose.connect(keys.mongoUri)
    .then(() => {
        console.log('connect');
    })
    .catch(err => console.error(err));
const port = process.env.PORT || 5000;
const UsersPath = path.join(__dirname, 'users');
app.use('/api/notes', notesRouter);
app.use(express.static(UsersPath));



app.listen(port, () => {
    console.log(`Server start on port ${port}`);
});