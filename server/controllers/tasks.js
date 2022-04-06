const getTasks = (req, res) => {
  res.send("Get all tasks");
};

const createTask = (req, res) => {
  res.send("Create a task");
};

export {getTasks, createTask};
