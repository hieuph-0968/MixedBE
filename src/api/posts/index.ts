import { Router, Request, Response } from "express";

const routerPost = Router();

routerPost.get("/", (req: Request,res: Response) => {
    res.send("get all posts")
})

export {routerPost}