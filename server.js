const express = require('express');
<<<<<<< HEAD
const app = express();
const port = 8000;
=======
const port = 3000;
const app = express();

>>>>>>> 6392b0d62cdd7456afdccef7c3953637a13084f8
app.use(express.static('public'));

app.get('/', function(req, res){
	res.sendFile('index.html');
});

app.listen(port, function(req, res){
<<<<<<< HEAD
	console.log('listening on port ', port);
});
=======
	console.log('running on port',port);
});
>>>>>>> 6392b0d62cdd7456afdccef7c3953637a13084f8
