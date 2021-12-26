import { Router, Request, Response } from "express";

const routerAuth = Router();

routerAuth.get("/", (req: Request,res: Response) => {
    res.send("get all users")
})

export {routerAuth}