import express from "express";
import { APP_PORT } from "./config";
import routes from "./routes";
import errorHandler from "./middlewares/errorHandler";

const app = express();

app.use("/api", routes);

app.use(errorHandler);

app.listen(APP_PORT, console.log(`server running at port ${APP_PORT}`));
