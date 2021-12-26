import { Router, Request, Response } from "express";

const routeAuth = Router();

routeAuth.get("/", (req: Request,res: Response) => {
    res.send("get all users")
})

export {routeAuth}
