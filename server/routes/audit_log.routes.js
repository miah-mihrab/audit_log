const express = require('express');
const router = express.Router();
const AuditLogController = require('../controllers/audit_log.controller');

router.post('/audit-log', AuditLogController.create);

module.exports = router;
