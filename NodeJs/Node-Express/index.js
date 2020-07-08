const express = require('express'),
     http = require('http');

const dishRouter = require('./routes/dishRouter');
const hostname = 'localhost';
const bodyParser = require('body-parser');
const port = 3000;
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));

app.use('/dishes', dishRouter);

app.use(bodyParser.json());


const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});