
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import env from "dotenv";

env.config()

import { apiRoute } from "./api";

const app = express();
app.use(helmet());
app.use(morgan("tiny"))
app.use(cors());
app.use(express.json())

app.use("/api", apiRoute)


const port = process.env.PORT || 3333

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

