import express from "express";
import { routerAuth } from "./users";
import { routerPost } from "./posts";

const apiRoute = express();

apiRoute.use('/users', routerAuth)
apiRoute.use('/posts', routerPost)

export {apiRoute}