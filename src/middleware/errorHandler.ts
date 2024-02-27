import { Request, Response, NextFunction } from "express";

import { ERR_CODES, MESSAGES } from "../utils/contants";
import { ClientError } from "../ClientError";
import { ServerError } from "../ServerError";

export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { message, stack } = error;

  if (error instanceof ClientError) {
    return res.status(error.errCode).send(message);
  }

  console.error({ message, stack });
  return res
    .status(ERR_CODES.SERVER_ERR)
    .send({ message: MESSAGES.ERR_MSG, stack });
}
