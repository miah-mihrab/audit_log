const mongoose = require("mongoose");


const audit_log_schema = new mongoose.Schema({
    site_id: {
        type: String,
        required: true,
        unique: true
    },
    created_by: {
        type: String,
        trim: true
    },
    updated_by: {
        type: String,
        trim: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('audit_log', audit_log_schema);