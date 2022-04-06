import express from "express";
import {updateTask, deleteTask} from "../controllers/task.js";

const router = express.Router();

router.route("/").patch(updateTask).delete(deleteTask);

export {router as task};
