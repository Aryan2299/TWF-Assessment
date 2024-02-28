"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const translate_1 = require("./translator/translate");
const errorHandler_1 = require("./middleware/errorHandler");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.post("/translate", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let translation;
    try {
        const { text } = req.body;
        const from = req.query.from;
        const to = req.query.to;
        translation = yield (0, translate_1.translateText)({ text, from, to });
    }
    catch (err) {
        return next(err);
    }
    res.status(200).json({ translation });
}));
exports.app.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send("Translator API");
}));
exports.app.use(errorHandler_1.errorHandler);
exports.app.listen(8080);
