var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');
/* GET users listing. */

//all routes start with /flight

//GET /flights //step1
router.get('/', flightsCtrl.index); //step3 make sure index is at the top

//GET/flights.new
router.get('/new', flightsCtrl.new);

//POST /flight.create
router.post('/', flightsCtrl.create);
//get flight details
router.get('/:id', flightsCtrl.show);

module.exports = router;

