import { Request, Response, NextFunction, Router } from 'express';
import authRouter from './auth/auth-controller';

const errorHandler = (
    err:Error,
    req:Request,
    res:Response,
    next:NextFunction,
) =>{
    res.status(500).json({
        status:false,
        message : "Some Error Occurred we are fixing this !!"
    });
    next();
}

export default ():Router => {
    const app :Router = Router();
    app.use("/auth",authRouter());
    app.use(errorHandler)
    return app;

}
