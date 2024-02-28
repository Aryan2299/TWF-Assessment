import express, { NextFunction, Request, Response, Router } from "express";

import { translateText } from "./translator/translate";
import { errorHandler } from "./middleware/errorHandler";

export const app = express();
const router = Router();
app.use(express.json());

app.post(
  "/translate",
  async (req: Request, res: Response, next: NextFunction) => {
    let translation;
    try {
      const { text } = req.body;
      const from = req.query.from as string;
      const to = req.query.to as string;

      translation = await translateText({ text, from, to }, next);
    } catch (err: any) {
      return next(err);
    }
    res.status(200).json({ translation });
  }
);

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send("Translator API");
});

app.use(errorHandler);

// app.use("/api/v1", router);

// app.listen(8080);

export default app;
