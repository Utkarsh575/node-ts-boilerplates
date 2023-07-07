"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegistrationSchema = exports.UserLoginSchema = void 0;
const zod_1 = require("zod");
exports.UserLoginSchema = zod_1.z.object({
    username: zod_1.z.string().trim().optional(),
    email: zod_1.z.string().trim(),
    password: zod_1.z.string().trim(),
});
exports.UserRegistrationSchema = zod_1.z.object({
    username: zod_1.z.string().trim().optional(),
    email: zod_1.z.string().trim(),
    password: zod_1.z.string().trim(),
});
//# sourceMappingURL=auth-model.js.map