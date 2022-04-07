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

const updateTask = async (req, res) => {
  try {
    const {id: taskID} = req.params;
    // second arg (req.boy) is the new value
    // third arg object.
    // -  new: true will always return the new value instead of the old one
    const Task = await task.findOneAndUpdate({_id: taskID}, req.body, {
      new: true, // ensures that the new value is returned instead of the old one.
      runValidators: true, // runs the evaluators from the TaskSchema -> without this someone could update the name to e.g. ""
    });
    if (!Task) {
      return res.status(404).json({msg: `No task with id = ${taskID}`});
    }
    res.status(200).json(Task);
  } catch (error) {
    res.status(500).json({msg: error.errors.name.message});
  }
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
