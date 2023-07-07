import cors from "cors";
import helmet from "helmet";
import express from "express";
import config from "../config";
import routes from '../api';

export default ({ app }: { app: express.Application }): void => {
  /*
 Health Check Route
*/

  app.get("/healthcheck", (req, res) => {
    const healthcheck = {
      uptime: process.uptime(),
      message: "OK",
      timestamp: Date.now(),
    };
    try {
      return res.json(healthcheck);
    } catch (e) {
      return res.status(503).send();
    }
  });

//   helmet 
app.use(helmet())
//cors 
app.use(cors())

app.use(express.json());

app.use(config.api.prefix, routes());
};
