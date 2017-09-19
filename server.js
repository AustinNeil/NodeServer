const express = require('express');
const app = express();
const port = 8000;
app.use(express.static('public'));

app.get('/', function(req, res){
	res.sendFile('index.html');
});

app.listen(port, function(req, res){
	console.log('listening on port ', port);
});