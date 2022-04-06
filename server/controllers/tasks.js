import task from "../models/task.js";

const getTasks = (req, res) => {
  res.json({message: "Get all tasks"});
};

const createTask = async (req, res) => {
  try {
    const Task = await task.create(req.body);
    res.status(201).json(Task);
  } catch (error) {
    res.status(500).json({msg: error.errors.name.message});
  }
};

const getTask = (req, res) => {
  const {id} = req.params;
  res.json({id: id});
};

const updateTask = (req, res) => {
  res.send("update task");
};

const deleteTask = (req, res) => {
  res.send("delete task");
};

export {getTasks, createTask, getTask, updateTask, deleteTask};
