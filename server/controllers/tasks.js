const getTasks = (req, res) => {
  res.json({message: "Get all tasks"});
};

const createTask = (req, res) => {
  console.log(req.body);
  res.send(req.body);
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
