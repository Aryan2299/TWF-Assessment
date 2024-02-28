"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientError = void 0;
class ClientError extends Error {
    constructor(message, errCode) {
        super(message);
        this.errCode = errCode;
    }
}
exports.ClientError = ClientError;
