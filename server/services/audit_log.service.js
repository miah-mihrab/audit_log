const AuditLogModel = require("../models/audit_log.model");

module.exports = {
    create: async (data) => {
        try {

            if(!data || !data.site_id || !data.created_by) return {error: true, status: 400, msg: "Vew few information provided"};
            
            let audit_log = await new AuditLogModel(data).save();

            if(audit_log) return {status: 201};
            else return {status: 500};
        } catch (err) {
            console.log(err);

            return {error: true, status: 500, msg: "Something went wrong", stack: process.env.NODE_ENV === "production" ? "" : err.stack};
        }
    },

    readBySiteId: async ({site_id}) => {
        try {
            let audit_log = await AuditLogModel.findOne({site_id});
            return audit_log;
        } catch (err) {
            console.log(err);

            return {error: true, msg: "Something went wrong", stack: process.env.NODE_ENV === "production" ? "" : err.stack};
        }
    }

}