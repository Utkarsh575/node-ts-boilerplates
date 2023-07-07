"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
process.env.NODE_ENV = process.env.NODE_ENV || "development";
exports.default = {
    port: parseInt(process.env.PORT) || 5050,
    databaseURL: process.env.MONGODB_URI,
    api: {
        prefix: "/api/v1",
    },
};
//# sourceMappingURL=index.js.map