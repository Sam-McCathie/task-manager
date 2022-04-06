import express from "express";

const app = express();
const port = 9000;

// routes
app.get("/", (req, res) => {
  res.send("Task manager app");
});

// app.get("/api/v1/tasks");           - get all tasks
// app.post("/api/v1/tasks");          - create a new task
// app.get("/api/v1/task/:id");        - get single task
// app.patch("/api/v1/task/:id");      - update task
// app.delete("/api/v1/task/:id");     - delete task

app.listen(port, (req, res) => {
  console.log(`server running on port ${port}`);
});
