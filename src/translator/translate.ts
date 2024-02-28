const translator = require("translate-google");
import { NextFunction } from "express";

import { ClientError } from "../ClientError";
import { TranslateDTO } from "../translator/dtos/translate.dto";
import { ERR_CODES, MESSAGES } from "../utils/contants";
import {
  handleInvalidInput,
  handleInvalidTranslationType,
  handleMissingInput,
} from "../utils/helper";

export async function translateText(
  translateDTO: TranslateDTO,
  next: NextFunction
) {
  const { text, from = "en", to = "fr" } = translateDTO;

  handleInvalidTranslationType(from, to);
  handleMissingInput(text);
  handleInvalidInput(text);

  let translation;

  await translator(text, {
    from,
    to,
  })
    .then((res: any) => {
      translation = res;
    })
    .catch((err: any) => {
      throw err;
    });

  if (translation === text.trim()) {
    return next(
      new ClientError(MESSAGES.TRANSLATION_ERR, ERR_CODES.CLIENT_ERR)
    );
  }

  return translation;
}
