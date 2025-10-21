const express = require('express');
const productRoutes = require('./routes/products');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/products', productRoutes);

app.listen(PORT, () => {
  console.log(`ProductService running on http://localhost:${PORT}`);
});
