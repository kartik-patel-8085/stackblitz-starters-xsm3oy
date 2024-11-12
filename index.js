const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

let products = [
  { name: 'Laptop', price: 50000, category: 'Electronics' },
  { name: 'Mobile', price: 20000, category: 'Electronics' },
  { name: 'Shirt', price: 1500, category: 'Apparel' },
  { name: 'Mixer Grinder', price: 4000, category: 'Home Appliances' },
];

function electronicsCategoty(productobj, category) {
  return productobj.category === category;
}

app.get('/products/categoty/:categoty', (req, res) => {
  let category = req.params.category;
  let catele = products.filter((productobj) =>
    electronicsCategoty(productobj, category)
  );
  res.json(catele);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
