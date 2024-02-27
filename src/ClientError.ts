import { ERR_CODES } from "utils/contants";

export class ClientError extends Error {
  public errCode: ERR_CODES;

  constructor(message: string, errCode: ERR_CODES) {
    super(message);

    this.errCode = errCode;
  }
}
