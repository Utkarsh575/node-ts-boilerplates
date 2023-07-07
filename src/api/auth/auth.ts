import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import {
  MISSING_ACCESS_TOKEN,
  INVALID_ACCESS_TOKEN,
  SERVER_ERROR,
} from "../../shared/errors";
import { JwtPayload } from "./auth-model";
import { getUserByEmail } from "./auth-service";

export function authenticate() {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json({ msg: "Auth Route" });
      next();
    } catch (err) {
      console.log(err);
      if (err.code) {
        return res.status(err.code).json({ msg: "msg from auth" });
      }
      return res.status(err.code).json({ msg: "msg from auth" });
    }
  };
}
export const authenticateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    
};
