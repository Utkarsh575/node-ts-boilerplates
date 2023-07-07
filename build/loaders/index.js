"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./database"));
const express_1 = __importDefault(require("./express"));
exports.default = async ({ expressApp, }) => {
    await (0, database_1.default)();
    console.log(`🍃 Connection to database successful`);
    await (0, express_1.default)({ app: expressApp });
    console.log("🚂 Express loaded");
};
//# sourceMappingURL=index.js.map