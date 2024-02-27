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
Object.defineProperty(exports, "__esModule", { value: true });
exports.translateText = void 0;
const translator = require("translate-google");
const ClientError_1 = require("../ClientError");
const contants_1 = require("../utils/contants");
const helper_1 = require("../utils/helper");
function translateText(translateDTO) {
    return __awaiter(this, void 0, void 0, function* () {
        const { text, from = "en", to = "fr" } = translateDTO;
        (0, helper_1.handleInvalidTranslationType)(from, to);
        (0, helper_1.handleMissingInput)(text);
        (0, helper_1.handleInvalidInput)(text);
        let translation;
        yield translator(text, {
            from,
            to,
        })
            .then((res) => {
            translation = res;
        })
            .catch((err) => {
            throw err;
        });
        if (translation === text.trim()) {
            throw new ClientError_1.ClientError(contants_1.MESSAGES.TRANSLATION_ERR, contants_1.ERR_CODES.CLIENT_ERR);
        }
        return translation;
    });
}
exports.translateText = translateText;
