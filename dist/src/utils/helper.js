"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleInvalidInput = exports.handleMissingInput = exports.handleInvalidTranslationType = void 0;
const ClientError_1 = require("../ClientError");
const contants_1 = require("./contants");
function handleInvalidTranslationType(from, to) {
    if (from.toLowerCase() !== "en" || to.toLowerCase() !== "fr") {
        throw new ClientError_1.ClientError(contants_1.MESSAGES.CANNOT_TRANSLATE, contants_1.ERR_CODES.CLIENT_ERR);
    }
}
exports.handleInvalidTranslationType = handleInvalidTranslationType;
function handleMissingInput(text) {
    if (typeof text === "string" && text.trim() === "") {
        throw new ClientError_1.ClientError(contants_1.MESSAGES.MISSING_INPUT, contants_1.ERR_CODES.CLIENT_ERR);
    }
}
exports.handleMissingInput = handleMissingInput;
function handleInvalidInput(text) {
    if (typeof text !== "string" || !isNaN(+text)) {
        throw new ClientError_1.ClientError(contants_1.MESSAGES.INVALID_INPUT, contants_1.ERR_CODES.CLIENT_ERR);
    }
}
exports.handleInvalidInput = handleInvalidInput;
