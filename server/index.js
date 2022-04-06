import express from "express";
import "dotenv/config";
import {connectDB} from "./db/connect.js";
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

const start = async () => {
  try {
    await connectDB(process.env.DB_CONNECTION_STRING);
    app.listen(port, (req, res) => {
      console.log(`server running on port ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
};

start();
