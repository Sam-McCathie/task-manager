import express from "express";
import {tasks} from "./router/tasks.js";
import {task} from "./router/task.js";

const app = express();
const port = 9000;

// routes
app.get("/", (req, res) => {
  res.send("Task manager app");
});

app.use("/api/v1/tasks", tasks);
app.use("/api/v1/task/:id", task);

app.listen(port, (req, res) => {
  console.log(`server running on port ${port}`);
});
