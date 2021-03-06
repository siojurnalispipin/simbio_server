const express = require('express');
const router = express.Router();
const reportsCtrl = require('../controllers/reports')

router.post('/order-product', reportsCtrl.report_product)
router.post('/order-invoice/detail', reportsCtrl.report_invoice_detail)
router.post('/order-invoice/days', reportsCtrl.report_invoice_days)
module.exports = router;