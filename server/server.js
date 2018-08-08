
//requires
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

//globals
//port to listen on
const port = process.env.PORT || 5000;

//uses



//server listen
app.listen(port, () => {
    console.log('server up on', port);
});