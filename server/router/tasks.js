import express from "express";
import {getTasks, createTask} from "../controllers/tasks.js";

const router = express.Router();

router.route("/").get(getTasks).post(createTask);

export {router as tasks};
