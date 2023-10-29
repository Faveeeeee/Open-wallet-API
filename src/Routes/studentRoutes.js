import { Router } from "express";
import { signup } from "Controllers/student.controller.js";

export const studentRouter = Router();


studentRouter.post('/signup', signup);

