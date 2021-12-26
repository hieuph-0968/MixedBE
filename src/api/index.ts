import express from "express";
import { routeAuth } from "./users";
import { routeProduct } from "./products";
import { routeCart } from "./cart";
import { routeOrder } from "./orders";

const apiRoute = express();

apiRoute.use('/users', routeAuth)
apiRoute.use('/posts', routeProduct)
apiRoute.use('/cart', routeCart)
apiRoute.use('/orders', routeOrder)

export {apiRoute}
