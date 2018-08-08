
//requires
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

//globals
//port to listen on
const port = 5000;

//uses
app.use(express.static('server/public'));


//server listen
app.listen(port, () => {
    console.log('server up on', port);
});