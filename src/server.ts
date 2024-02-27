import express, { NextFunction, Request, Response } from "express";

import { translateText } from "./translator/translate";
import { errorHandler } from "./middleware/errorHandler";

export const app = express();
app.use(express.json());

app.post(
  "/translate",
  async (req: Request, res: Response, next: NextFunction) => {
    let translation;
    try {
      const { text } = req.body;
      const from = req.query.from as string;
      const to = req.query.to as string;

      translation = await translateText({ text, from, to });
    } catch (err: any) {
      return next(err);
    }
    res.status(200).json({ translation });
  }
);

app.use(errorHandler);

app.listen(8080);
