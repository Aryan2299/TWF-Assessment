"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const contants_1 = require("../utils/contants");
const ClientError_1 = require("../ClientError");
function errorHandler(error, req, res, next) {
    const { message, stack } = error;
    if (error instanceof ClientError_1.ClientError) {
        return res.status(error.errCode).send(message);
    }
    console.error({ message, stack });
    return res
        .status(contants_1.ERR_CODES.SERVER_ERR)
        .send({ message: contants_1.MESSAGES.ERR_MSG, stack });
}
exports.errorHandler = errorHandler;
