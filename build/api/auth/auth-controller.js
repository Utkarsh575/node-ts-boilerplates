"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("./auth");
const authRouter = () => {
    const app = (0, express_1.Router)();
    app.get("/", (0, auth_1.authenticate)());
    return app;
};
exports.default = authRouter;
//# sourceMappingURL=auth-controller.js.map