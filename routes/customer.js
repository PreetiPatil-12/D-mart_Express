var express = require('express');
var router = express.Router();

router.get('/customers', function(req, res) {
    const customers = [
    { customerId: 1, customerName: 'Alice Johnson', customerAddress: 'Delhi', customerPhone: 9825364649 },
    { customerId: 2, customerName: 'Bob Williams', customerAddress: 'Mumbai', customerPhone: 9834567890 },
    { customerId: 3, customerName: 'Charlie Brown', customerAddress: 'Bengaluru', customerPhone: 9845678901 },
    { customerId: 4, customerName: 'Diana Smith', customerAddress: 'Chennai', customerPhone: 9856789012 },
    { customerId: 5, customerName: 'Ethan Davis', customerAddress: 'Hyderabad', customerPhone: 9867890123 },
    { customerId: 6, customerName: 'Fiona Wilson', customerAddress: 'Pune', customerPhone: 9878901234 },
    { customerId: 7, customerName: 'George Miller', customerAddress: 'Kolkata', customerPhone: 9889012345 },
    { customerId: 8, customerName: 'Hannah Moore', customerAddress: 'Jaipur', customerPhone: 9890123456 },
    { customerId: 9, customerName: 'Ian Taylor', customerAddress: 'Ahmedabad', customerPhone: 9901234567 },
    { customerId: 10, customerName: 'Julia Anderson', customerAddress: 'Lucknow', customerPhone: 9912345678 }
];
    res.json(customers);
});

module.exports = router;
