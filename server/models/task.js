import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"], // second item in the array is the error message.
    trim: true, // removes space at start & end e.g. "       hello      " = "hello"
    maxlength: [20, "name cannot be longer than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Task", TaskSchema);
