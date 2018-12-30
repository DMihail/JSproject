const  express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const  keys = require('./keys');
const app = express();
mongoose.connect(keys.mongoUri)
    .then(() => {
        console.log('connect');
    })
    .catch(err => console.error(err));
const port = process.env.PORT || 5000;
const UsersPath = path.join(__dirname, 'users');
app.use(express.static(UsersPath));



app.listen(port, () => {
    console.log(`Server start on port ${port}`);
});