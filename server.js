require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');


const auth = require('./routes/auth');
const products = require('./routes/products');
const cart = require('./routes/cart');

connectDB();

const app = express();


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('PharmaBeauty Backend is running!');
});


app.use('/api/auth', auth);
app.use('/api/products', products);
app.use('/api/cart', cart);


app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});


if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;