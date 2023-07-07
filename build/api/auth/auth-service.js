"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = exports.getUserByEmail = exports.getUser = void 0;
const database_1 = __importDefault(require("../../loaders/database"));
const errors_1 = require("../../shared/errors");
async function getUser(user) {
    const dbData = await (await (0, database_1.default)())
        .collection("users")
        .findOne({ username: user.username });
    if (dbData === null)
        throw errors_1.RESOURCE_NOT_FOUND;
    return dbData;
}
exports.getUser = getUser;
async function getUserByEmail(user) {
    const dbData = await (await (0, database_1.default)())
        .collection("users")
        .findOne({ email: user.email });
    if (dbData === null)
        throw errors_1.RESOURCE_NOT_FOUND;
    return dbData;
}
exports.getUserByEmail = getUserByEmail;
async function addUser(user) {
    const dbData = await (await (0, database_1.default)())
        .collection("users")
        .insertOne({ username: user.username, email: user.email, password: user.password });
    return user.email;
}
exports.addUser = addUser;
//# sourceMappingURL=auth-service.js.map