"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importStar(require("express"));
const translate_1 = require("./translator/translate");
const errorHandler_1 = require("./middleware/errorHandler");
exports.app = (0, express_1.default)();
const router = (0, express_1.Router)();
exports.app.use(express_1.default.json());
router.post("/translate", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
router.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send("Translator API");
}));
exports.app.use(errorHandler_1.errorHandler);
exports.app.use("/api/v1", router);
// app.listen(8080);
