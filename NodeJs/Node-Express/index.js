const http = require('http');
const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const bodyPraser = require('body-parser');

const app = express();


app.use(bodyPraser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

const dishRouter = require('./routes/dishRouter');
const leaderRouter = require('./routes/leaderRouter');
const promoRouter = require('./routes/promoRouter');
app.use('/leaders',leaderRouter);
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);

app.use((req,res,nest) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port, hostname, ()=>{
    console.log(`server running at http://${hostname}:${port}/`);
});