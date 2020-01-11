// const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express();

app.post('/api/checkout', (req, res) => {
  res.send(JSON.stringify(res.post));
});


app.use(express.static(path.join(__dirname, '/dist/BBZWGucciStore')));

// app.use('/data', < your route file > );
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '/dist/BBZWGucciStore', 'index.html'));
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
