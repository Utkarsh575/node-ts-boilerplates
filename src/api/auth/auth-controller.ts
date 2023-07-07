import { Router, Request, Response } from "express";
import { authenticate } from "./auth";
import { getUser,getUserByEmail,addUser } from "./auth-service";
const authRouter = () => {
  const app = Router();
  app.get("/", authenticate());
  return app;
};

export default authRouter;
