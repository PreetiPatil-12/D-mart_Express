var express = require('express');
var router = express.Router();

router.get('/payments', function(req, res) {
    const payments = [
  { billId: 1, billAmount: 5000, billDate: '2023-01-01' },
  { billId: 2, billAmount: 3200, billDate: '2023-01-15' },
  { billId: 3, billAmount: 4500, billDate: '2023-02-10' },
  { billId: 4, billAmount: 2750, billDate: '2023-03-05' },
  { billId: 5, billAmount: 6100, billDate: '2023-04-12' },
  { billId: 6, billAmount: 3900, billDate: '2023-05-20' },
  { billId: 7, billAmount: 7200, billDate: '2023-06-08' },
  { billId: 8, billAmount: 5400, billDate: '2023-07-14' },
  { billId: 9, billAmount: 6800, billDate: '2023-08-22' },
  { billId: 10, billAmount: 4950, billDate: '2023-09-30' }
];
    res.json(payments);
});

module.exports = router;
