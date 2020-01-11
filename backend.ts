import * as express from 'express';
import * as path from 'path';
import { Product } from 'src/app/products.service';

const app = express();


app.post('/api/checkout', (req, res) => {
  res.send(JSON.stringify(res.post));
});
// app.get('/api/price')

app.use(express.static(path.join(__dirname, '/dist/BBZWGucciStore')));

// app.use('/data', < your route file > );
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '/dist/BBZWGucciStore', 'index.html'));
});
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
