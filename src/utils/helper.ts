import { ClientError } from "../ClientError";
import { ERR_CODES, MESSAGES } from "./contants";

export function handleInvalidTranslationType(from: string, to: string) {
  if (from.toLowerCase() !== "en" || to.toLowerCase() !== "fr") {
    throw new ClientError(MESSAGES.CANNOT_TRANSLATE, ERR_CODES.CLIENT_ERR);
  }
}

export function handleMissingInput(text: string) {
  if (typeof text === "string" && text.trim() === "") {
    throw new ClientError(MESSAGES.MISSING_INPUT, ERR_CODES.CLIENT_ERR);
  }
}

export function handleInvalidInput(text: string) {
  if (typeof text !== "string" || !isNaN(+text)) {
    throw new ClientError(MESSAGES.INVALID_INPUT, ERR_CODES.CLIENT_ERR);
  }
}
