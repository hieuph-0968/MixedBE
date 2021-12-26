import { Router, Request, Response } from "express";

const routeProduct = Router();

routeProduct.post("/a", (req: Request,res: Response) => {
    res.send(req.body.username)
    
})

export {routeProduct}
