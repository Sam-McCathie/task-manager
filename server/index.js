import express from "express";
import cors from "cors";
import "dotenv/config";
import {connectDB} from "./db/connect.js";
import {tasks} from "./router/tasks.js";
import {notFound} from "./middleware/not-found.js";

const app = express();
const port = 9000;

// middleware
// app.use(cors());
app.use(express.static("../client"));
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);
app.use(notFound); //fallback route --> when user enters invalid route

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
