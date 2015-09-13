var express = require('express');
var path = require('path');
var app = express();

var tenDays = 86400000*10;

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '/spons-brochure', 'spons-rep.html'));
});

app.get('/avenues', function (req, res) {
	res.sendFile(path.join(__dirname, '/spons-brochure', 'spons-avenues.html'));
});

app.get('/publicity', function (req, res) {
	res.sendFile(path.join(__dirname, '/spons-brochure', 'spons-publicity.html'));
});

app.get('/quotes', function (req, res) {
	res.sendFile(path.join(__dirname, '/spons-brochure', 'spons-quotes.html'));
});

app.get('/social', function (req, res) {
	res.sendFile(path.join(__dirname, '/spons-brochure', 'spons-social.html'));
});

app.get('/why-shaastra', function (req, res) {
	res.sendFile(path.join(__dirname, '/spons-brochure', 'spons-why.html'));
});

app.get('/workshops', function (req, res) {
	res.sendFile(path.join(__dirname, '/spons-brochure', 'spons-workshops.html'));
});

app.get('/aerofest', function (req, res) {
	res.sendFile(path.join(__dirname, '/spons-brochure', 'spons-events-aerofest.html'));
});

app.get('/b-events', function (req, res) {
	res.sendFile(path.join(__dirname, '/spons-brochure', 'spons-events-b-events.html'));
});

app.get('/department-flagship', function (req, res) {
	res.sendFile(path.join(__dirname, '/spons-brochure', 'spons-events-department-flagship.html'));
});

app.get('/design-and-build', function (req, res) {
	res.sendFile(path.join(__dirname, '/spons-brochure', 'spons-events-design-and-build.html'));
});

app.get('/electronics-fest', function (req, res) {
	res.sendFile(path.join(__dirname, '/spons-brochure', 'spons-events-electronics-fest.html'));
});

app.get('/involve', function (req, res) {
	res.sendFile(path.join(__dirname, '/spons-brochure', 'spons-events-involve.html'));
});

app.get('/quizzing', function (req, res) {
	res.sendFile(path.join(__dirname, '/spons-brochure', 'spons-events-quizzing.html'));
});

app.get('/research', function (req, res) {
	res.sendFile(path.join(__dirname, '/spons-brochure', 'spons-events-research.html'));
});

app.use(express.static(__dirname + '/spons-brochure', { maxAge: tenDays }));

app.listen(8081);