const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the promotions to you!');
})
.post((req, res, next) => {
    res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res, next) => {
    res.end('Deleting all promotions');
});

promoRouter.route('/:promoId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req,res,next) => {
    res.end('Will send the promotion:'+req.params.promoId+' to you!');
})
.post((req, res, next) => {
    res.end('POST operation not supported on promotion:'+req.params.promoId);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('\will update the promotion:'+req.params.promoId + ' with name:'+req.body.name +' with description : ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting the promotion with id:'+req.params.promoId);
});

module.exports = promoRouter; 