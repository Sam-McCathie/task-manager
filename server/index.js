import "dotenv/config";
import {mongoose} from "./db/connect.js";
import express from "express";
import {tasks} from "./router/tasks.js";

const app = express();
const port = 9000;

// middleware
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);

app.get("/", (req, res) => {
  res.send("Task manager app");
});

app.listen(port, (req, res) => {
  console.log(`server running on port ${port}`);
});
