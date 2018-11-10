let express = require('express');
let app = express();

app.get('/', function(req, res) {
	res.send('Hi there, welcome to my assignment!!');
});

app.get('/speak/pig', function(req, res) {
	res.send("The pig says 'Oink'");
});

app.get('/speak/cow', function(req, res) {
	res.send("The cow says 'Moo'");
});

app.get('/speak/dog', function(req, res) {
	res.send("The dog says'Woof Woof'");
});

app.get('*', function(req, res) {
	res.send('Sorry, page not found...What are you doing with your life??');
});

app.listen(3000, process.env.IP, function() {
	console.log('The server has started!');
});
