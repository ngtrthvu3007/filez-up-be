import express from "express";
import dotenv from "dotenv";
import { databaseConnection } from "./services/database.services.js";
import { defaultErrorHandler } from "./middlewares/defaultErrorHandler.js";
import userRouter from "./routers/user.routes.js";
dotenv.config();

export const app = express();
const port = process.env.PORT;

databaseConnection();
app.use(express.json());

app.use("/user", userRouter);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("Server is ready on port: ", port);
});
app.use(defaultErrorHandler);
