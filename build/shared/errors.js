"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DUPLICATE_USER = exports.MALFORMED_BODY = exports.RESOURCE_NOT_FOUND = exports.INVALID_ACCESS_TOKEN = exports.MISSING_ACCESS_TOKEN = exports.SERVER_ERROR = void 0;
exports.SERVER_ERROR = {
    code: 500,
    message: {
        error: 'Server Error',
        error_description: 'Something bad happened at the server.', // Harsh bhaiya ko bolna :')
    },
};
exports.MISSING_ACCESS_TOKEN = {
    code: 401,
    message: {
        error: 'unauthorized',
        error_description: 'Authorization token is required',
    },
};
exports.INVALID_ACCESS_TOKEN = {
    code: 401,
    message: {
        error: 'unauthorized',
        error_description: 'Invalid token',
    },
};
exports.RESOURCE_NOT_FOUND = {
    code: 404,
    message: {
        error: 'not found',
        error_description: 'Resource was not found',
    },
};
exports.MALFORMED_BODY = {
    code: 400,
    message: {
        error: 'bad request',
        error_description: 'Malformed body passed',
    },
};
exports.DUPLICATE_USER = {
    code: 409,
    message: {
        error: "duplicate request",
        error_description: "The user already exists!"
    }
};
//# sourceMappingURL=errors.js.map