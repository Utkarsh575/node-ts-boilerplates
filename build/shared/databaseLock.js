"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseLock = void 0;
const databaseLock = (req, res, next) => {
    if (process.env.DATABASE_LOCK === "enable" &&
        (req.method === "POST" || req.method === "PUT" || req.method === "DELETE"))
        return res.status(403).json({
            success: false,
            message: "Server is temporarily on lockdown. Please try again later.",
        });
    next();
};
exports.databaseLock = databaseLock;
//# sourceMappingURL=databaseLock.js.map