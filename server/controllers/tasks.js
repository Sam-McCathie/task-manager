import task from "../models/task.js";
import {asyncWrapper} from "../middleware/async.js";
import {createCustomError} from "../errors/custom-error.js";

// Example of simple try catch compared to above
const getTasks = async (req, res) => {
  try {
    const tasks = await task.find({});
    res.status(201).json({tasks});
    // res.status(201).json({tasks, amount: tasks.length}); // adding length to res
    // res.status(201).json({status: "success", data: {tasks}, amount: tasks.length}); // adding a status
    // res.status(500).json({status: "success", msg: error});
  } catch (error) {
    res.status(500).json({err: error});
  }
};

// asyncWrapper -> added so try catch block doesn't need to be repeated
// - all the below controllers could be converted
const createTask = asyncWrapper(async (req, res) => {
  const Task = await task.create(req.body);
  res.status(201).json(Task);
});

const getTask = asyncWrapper(async (req, res, next) => {
  const {id: taskID} = req.params;
  const Task = await task.findOne({_id: taskID});
  if (!Task) {
    return next(createCustomError("Task Not Found Matey", 404));
    // below javascript error object is replaced by the above custim error message.
    // using inbuild javascript error object
    // const error = new Error("Task Not Found");
    // error.status = 404;
    // return next(error);
  }
  res.status(201).json(Task);
});

const updateTask = asyncWrapper(async (req, res) => {
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
});

const deleteTask = asyncWrapper(async (req, res) => {
  const {id: taskID} = req.params;
  const Task = await task.findOneAndDelete({_id: taskID});
  if (!Task) {
    return res.status(404).json({msg: `No task with id = ${taskID}`});
  }
  res.status(201).json(Task);
});

export {getTasks, createTask, getTask, updateTask, deleteTask};
