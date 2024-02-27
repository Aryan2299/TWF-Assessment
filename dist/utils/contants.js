"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERR_CODES = exports.MESSAGES = void 0;
var MESSAGES;
(function (MESSAGES) {
    MESSAGES["ERR_MSG"] = "Something went wrong.";
    MESSAGES["INVALID_INPUT"] = "Invalid input.";
    MESSAGES["MISSING_INPUT"] = "Missing input.";
    MESSAGES["TRANSLATION_ERR"] = "Couldn't translate.";
    MESSAGES["CANNOT_TRANSLATE"] = "Only English to French translation is allowed.";
})(MESSAGES = exports.MESSAGES || (exports.MESSAGES = {}));
var ERR_CODES;
(function (ERR_CODES) {
    ERR_CODES[ERR_CODES["SERVER_ERR"] = 500] = "SERVER_ERR";
    ERR_CODES[ERR_CODES["CLIENT_ERR"] = 400] = "CLIENT_ERR";
})(ERR_CODES = exports.ERR_CODES || (exports.ERR_CODES = {}));
