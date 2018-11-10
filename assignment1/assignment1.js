let express = require('express');
let app = express();

app.get('/', function(req, res) {
	res.send('Hi there, welcome to my assignment!!');
});

app.get('/speak/:animal', function(req, res) {
	var animal = req.params.animal.toLowerCase();
	var sounds = {
		pig: 'Oink',
		cow: 'Moo',
		dog: 'Woof Woof',
		cat: 'I hate you human',
		goldfish: '...'
	};
	var sound = sounds[animal];
	// if (animal === 'pig') {
	// 	sound = 'oink';
	// } else if (animal === 'cow') {
	// 	sound = 'moo';
	// } else if (animal === 'dog') {
	// 	sound = 'woof woof';
	// }

	res.send('The ' + animal + ' says "' + sound + '"');
});

app.get('/repeat/:message/:times', function(req, res) {
	var message = req.params.message;
	var times = Number(req.params.times);
	var result = ' ';
	for (var i = 0; i < times; i++) {
		result += message + ' ';
	}
	res.send(result);
});

// app.get('/speak/pig', function(req, res) {
// 	res.send("The pig says 'Oink'");
// });

// app.get('/speak/cow', function(req, res) {
// 	res.send("The cow says 'Moo'");
// });

// app.get('/speak/dog', function(req, res) {
// 	res.send("The dog says'Woof Woof'");
// });

app.get('*', function(req, res) {
	res.send('Sorry, page not found...What are you doing with your life??');
});

app.listen(3000, process.env.IP, function() {
	console.log('The server has started!');
});
