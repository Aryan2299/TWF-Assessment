import { ERR_CODES } from "utils/contants";

export class ServerError extends Error {
  public errCode: ERR_CODES;
  public errStack: any;

  constructor(message: string, errCode: ERR_CODES, stack: any) {
    super(message);

    this.errCode = errCode;
    this.errStack = stack;
  }
}
