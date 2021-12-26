
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import env from "dotenv";
import bodyParser from "body-parser";

import { apiRoute } from "./api";
import { connectDB } from "./utils/mongodb";

const app = express();
app.use(helmet());
app.use(morgan("tiny"))
app.use(cors());
app.use(express.json())
env.config()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// connect db
connectDB(process.env.MONGO_URL || "");

app.use("/api", apiRoute)

const port = process.env.PORT || 3333

app.listen(port, () => console.log(`BE server listening on port ${port}!`))
