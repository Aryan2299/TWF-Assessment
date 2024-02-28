import { NextFunction } from "express";
import { ClientError } from "../ClientError";
import { ERR_CODES, MESSAGES } from "./contants";

export function handleInvalidTranslationType(
  from: string,
  to: string,
  next: NextFunction
) {
  if (from.toLowerCase() !== "en" || to.toLowerCase() !== "fr") {
    return next(
      new ClientError(MESSAGES.CANNOT_TRANSLATE, ERR_CODES.CLIENT_ERR)
    );
  }
}

export function handleMissingInput(text: string, next: NextFunction) {
  if (typeof text === "string" && text.trim() === "") {
    return next(new ClientError(MESSAGES.MISSING_INPUT, ERR_CODES.CLIENT_ERR));
  }
}

export function handleInvalidInput(text: string, next: NextFunction) {
  if (typeof text !== "string" || !isNaN(+text)) {
    return next(new ClientError(MESSAGES.INVALID_INPUT, ERR_CODES.CLIENT_ERR));
  }
}
