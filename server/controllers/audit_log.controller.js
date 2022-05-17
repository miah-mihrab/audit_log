const AuditLogService = require("../services/audit_log.service");

module.exports = {
    create: async (req, res) => {
        try {
            let audit_log = await AuditLogService.create(req.body);

            if(audit_log.status === 201) return res.status(201).json();

            return res.status(500).json({msg: "Something went wrong"});
        } catch (err) {
            console.log(err);

            return {error: true, msg: "Something went wrong", stack: process.env.NODE_ENV === "production" ? "" : err.stack};
        }
    }
}