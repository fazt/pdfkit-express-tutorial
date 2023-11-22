import express from "express";
import index from "./routes/index.js";

const app = express();

app.use(index);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
