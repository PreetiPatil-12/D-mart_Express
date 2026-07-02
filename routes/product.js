var express = require('express');

var router = express.Router();

router.get('/products', function(req, res) {
    const products = [
  { productId: 1, productName: 'Chocolates', productPrice: 10.99, productCost: 5.99, productQty: 100 },
  { productId: 2, productName: 'Biscuits', productPrice: 5.49, productCost: 2.99, productQty: 200 },
  { productId: 3, productName: 'Soft Drink', productPrice: 15.99, productCost: 9.50, productQty: 150 },
  { productId: 4, productName: 'Potato Chips', productPrice: 20.00, productCost: 12.00, productQty: 120 },
  { productId: 5, productName: 'Ice Cream', productPrice: 30.50, productCost: 18.75, productQty: 80 },
  { productId: 6, productName: 'Cookies', productPrice: 12.99, productCost: 7.25, productQty: 140 },
  { productId: 7, productName: 'Fruit Juice', productPrice: 25.99, productCost: 16.50, productQty: 90 },
  { productId: 8, productName: 'Bread', productPrice: 18.00, productCost: 10.50, productQty: 110 },
  { productId: 9, productName: 'Milk', productPrice: 28.99, productCost: 20.00, productQty: 75 },
  { productId: 10, productName: 'Cheese', productPrice: 45.99, productCost: 30.99, productQty: 60 }
];
    res.json(products);
});

module.exports = router;