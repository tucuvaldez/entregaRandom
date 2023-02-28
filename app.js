import express from "express";
import { fork } from "child_process";

const app = express();

app.get("/", async (req, res) => {
  const numAleatorio = parseInt(req.query.cantidad)
    ? parseInt(req.query.cantidad)
    : 100000000;
  console.log(numAleatorio);
  const forked = fork("./random.js");
  forked.on("message", (message) => {
    res.json(message);
  });
  setTimeout(() => {
    forked.send(numAleatorio);
  }, 2000);
});

app.listen(8080, () => console.log("listening on port 8080"));
