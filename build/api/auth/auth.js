"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUser = exports.authenticate = void 0;
function authenticate() {
    return async (req, res, next) => {
        try {
            res.status(200).json({ msg: "Auth Route" });
            next();
        }
        catch (err) {
            console.log(err);
            if (err.code) {
                return res.status(err.code).json({ msg: "msg from auth" });
            }
            return res.status(err.code).json({ msg: "msg from auth" });
        }
    };
}
exports.authenticate = authenticate;
const authenticateUser = async (req, res, next) => {
};
exports.authenticateUser = authenticateUser;
//# sourceMappingURL=auth.js.map