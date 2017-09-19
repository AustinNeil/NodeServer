const express = require('express');
const port = 3000;
const app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
	res.sendFile('index.html');
});

app.listen(port, function(req, res){
	console.log('running on port',port);
});
