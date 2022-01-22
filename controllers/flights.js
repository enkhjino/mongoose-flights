const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    create,
    index,
    show
};

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        Ticket.find({ flight: flight._id }, function (err, tickets) {
            res.render('flights/show', { flight, tickets });
        });
    });
};

console.log()
function index(req, res) { //step4
    Flight.find({}, function (err, flights) {
        if (err) return res.redirect('/'); //5 combined
        res.render('flights/index', { flights });  //means we are passing an object in JSON format to the ejs views file.
    });
}

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    // remove leading and trailing spaces
    req.body.departs = req.body.departs || undefined;
    req.body.flightNo = req.body.flightNo.trim();
    const flight = new Flight(req.body);
    flight.save(function (err) {
        // one way to handle errors
        if (err) return res.render('flights/new');
        console.log(flight);
        res.redirect('/flights');
    });
}