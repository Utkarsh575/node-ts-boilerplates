"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = __importDefault(require("./auth/auth-controller"));
const errorHandler = (err, req, res, next) => {
    res.status(500).json({
        status: false,
        message: "Some Error Occurred we are fixing this !!"
    });
    next();
};
exports.default = () => {
    const app = (0, express_1.Router)();
    app.use("/auth", (0, auth_controller_1.default)());
    app.use(errorHandler);
    return app;
};
//# sourceMappingURL=index.js.map