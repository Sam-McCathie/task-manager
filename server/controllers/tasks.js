import task from "../models/task.js";

const getTasks = async (req, res) => {
  try {
    const Task = await task.find({});
    res.status(201).json(Task);
  } catch (error) {
    res.status(500).json({msg: "error"});
  }
};

const createTask = async (req, res) => {
  try {
    const Task = await task.create(req.body);
    res.status(201).json(Task);
  } catch (error) {
    res.status(500).json({msg: error.errors.name.message});
  }
};

const getTask = async (req, res) => {
  try {
    const {id: taskID} = req.params;
    const Task = await task.findOne({_id: taskID});
    if (!Task) {
      return res.status(404).json({msg: `No task with id = ${taskID}`}); // handles invalid id
    }
    res.status(201).json(Task);
  } catch (error) {
    res.status(500).json({msg: error}); // server error
  }
};

const updateTask = (req, res) => {
  res.send("update task");
};

const deleteTask = async (req, res) => {
  try {
    const {id: taskID} = req.params;
    const Task = await task.findOneAndDelete({_id: taskID});
    if (!Task) {
      return res.status(404).json({msg: `No task with id = ${taskID}`});
    }
    res.status(201).json(Task);
  } catch (error) {
    res.status(500).json({msg: error});
  }
};

export {getTasks, createTask, getTask, updateTask, deleteTask};
