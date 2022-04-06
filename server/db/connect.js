import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({path: "../.env"});

const connectionString = `mongodb+srv://Sam:${process.env.DB_PASSWORD}@task-manager.33uq3.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(connectionString)
  .then(() => console.log("DB Connected :)"))
  .catch((err) => console.error(err));

export {mongoose};
