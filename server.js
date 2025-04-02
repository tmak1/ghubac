import express from "express";
import cors from "cors";
import router from "./routes.js";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 8080;
const HOST = "localhost";

app.use(router);

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  console.log({ w: null, message: err.message, stack: err.stack });

  res.status(statusCode).send({ message });
});

app.listen(PORT, HOST, (err) => {
  if (err) {
    console.log(`Could not connect to server `, err);
  }
  console.log(`Server started on host ${HOST}:${PORT}`);
});
