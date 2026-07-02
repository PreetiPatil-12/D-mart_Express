var express = require('express');
var router = express.Router();

router.get('/employees', function(req, res) {
    const employees = [
  { employeeId: 1, employeeName: 'John Doe', employeeAddress: '123 Main St, New York', employeePhone: 9876543210 },
  { employeeId: 2, employeeName: 'Jane Smith', employeeAddress: '45 Park Ave, Chicago', employeePhone: 9876543211 },
  { employeeId: 3, employeeName: 'Michael Johnson', employeeAddress: '78 Lake View Rd, Dallas', employeePhone: 9876543212 },
  { employeeId: 4, employeeName: 'Emily Davis', employeeAddress: '12 Green St, Houston', employeePhone: 9876543213 },
  { employeeId: 5, employeeName: 'David Wilson', employeeAddress: '89 Sunset Blvd, Los Angeles', employeePhone: 9876543214 },
  { employeeId: 6, employeeName: 'Sarah Brown', employeeAddress: '34 Oak Street, Seattle', employeePhone: 9876543215 },
  { employeeId: 7, employeeName: 'Robert Miller', employeeAddress: '56 River Rd, Boston', employeePhone: 9876543216 },
  { employeeId: 8, employeeName: 'Sophia Taylor', employeeAddress: '91 Pine St, Miami', employeePhone: 9876543217 },
  { employeeId: 9, employeeName: 'James Anderson', employeeAddress: '67 Hill Rd, Denver', employeePhone: 9876543218 },
  { employeeId: 10, employeeName: 'Olivia Thomas', employeeAddress: '25 Maple Ave, San Francisco', employeePhone: 9876543219 }
];
    res.json(employees);
});

module.exports = router;