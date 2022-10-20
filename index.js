import express from "express";
import mongoose from "mongoose";
import { formValidation } from './validations/form.js';
import { sender } from './controllers/FormController.js';
import cors from 'cors';

mongoose
  .connect(
    process.env.MONGODB_URI
  )
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error", err));

const app = express();

app.use(express.json());

app.use(cors());

app.post("/messages", formValidation, sender);

app.listen(3001, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server run");
});
