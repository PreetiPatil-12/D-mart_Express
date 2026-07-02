var express=require('express');
var app=express();

var productRoutes=require('./routes/product');
var customerRoutes=require('./routes/customer');
var employeeRoutes=require('./routes/employee');
var paymentRoutes=require('./routes/payments');

app.use(productRoutes);
app.use(customerRoutes);
app.use(employeeRoutes);
app.use(paymentRoutes);

app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});