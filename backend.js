const express = require('express');
const path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '/dist/BBZWGucciStore')));

// app.use('/data', < your route file > );
app.use(function (req, res) {
	  res.sendFile(path.join(__dirname, '/dist/BBZWGucciStore', 'index.html'));
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
  });
