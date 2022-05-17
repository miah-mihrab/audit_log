const AuditLogService = require("../services/audit_log.service");
require("dotenv").config();

const configs = require("../config");
configs.connectDB()

describe("AuditLogService", () => {
    test("create audit log", async () => {
        try {
            const created_by = Math.random().toString(36).substring(7);
            const data = await AuditLogService.create({site_id: Math.random().toString(36).substring(7), created_by, updated_by: created_by});
    
                expect(data).toBeDefined();
                expect(data.status).toBe(201);
            
        } catch (err) {
            expect(err.status).toBe(500)
        }

    })
    test("throw error for less data while audit_log create", async () => {
        try {
            const created_by = Math.random().toString(36).substring(7);
            
            // Not providing site_id
            const data = await AuditLogService.create({created_by, updated_by: created_by});
    
             expect(data.status).toBe(400)
            
        } catch (err) {
            expect(err.status).toBe(500)
        }

    })

    test("read audit log by site id", async () => {
        try {
            const audit_log = await AuditLogService.readBySiteId({site_id: "0kh61h"});
            expect(audit_log).toBeDefined();
        } catch (err) {
            expect(err).toBeUndefined();
        }
    })
})