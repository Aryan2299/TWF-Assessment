"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = void 0;
class ServerError extends Error {
    constructor(message, errCode, stack) {
        super(message);
        this.errCode = errCode;
        this.errStack = stack;
    }
}
exports.ServerError = ServerError;
