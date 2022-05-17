// create a new express server
const express = require('express');
const app = express();
require('dotenv').config();
const configs = require('./config');
configs.connectDB();

const AuditRouter = require('./routes/audit_log.routes');

app.use(express.json())
app.use(AuditRouter);

process.on('uncaughtException', function (er) {
    console.error(er.stack)
    process.exit(1)
  })

app.listen(3000, () => {
    console.log("Server Connected")
})
