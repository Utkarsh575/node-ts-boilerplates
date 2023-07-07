import { Request, Response, NextFunction } from "express";

export const databaseLock = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (
    process.env.DATABASE_LOCK === "enable" &&
    (req.method === "POST" || req.method === "PUT" || req.method === "DELETE")
  )
    return res.status(403).json({
      success: false,
      message: "Server is temporarily on lockdown. Please try again later.",
    });
  next();
};
