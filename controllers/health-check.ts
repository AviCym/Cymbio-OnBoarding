import { Request, Response } from "express";

const healthCheck = (req:Request, res:Response) => res.sendStatus(200);
export default healthCheck;