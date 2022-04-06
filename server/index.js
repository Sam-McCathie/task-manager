import express from "express";
import {tasks} from "./router/tasks.js";
// import {task} from "./router/task.js";

const app = express();
const port = 9000;

// middleware
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);
// app.use("/api/v1/task/:id", task);

app.get("/", (req, res) => {
  res.send("Task manager app");
});

app.listen(port, (req, res) => {
  console.log(`server running on port ${port}`);
});
