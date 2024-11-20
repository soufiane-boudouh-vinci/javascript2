import express from "express";

import filmRouter from "./routes/films";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let totalRequests = 0;
app.use((req, _res, next) => {
  if (req.method === "GET") {
    totalRequests++;
  }
  console.log(`GET counter : ${totalRequests}`);
  next();
});

app.use("/films", filmRouter);

export default app;
