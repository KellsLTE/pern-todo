import { Router } from "express";
import todoController from "../controllers/todo.controller.js";

const router = Router();

router.get("/api/todos", todoController.getTodos);
router.post("/api/todos", todoController.createTodo);
router.get("/api/todos/:id", todoController.getTodo);
router.put("/api/todos/:id", todoController.updateTodo);
router.delete("/api/todos/:id", todoController.deleteTodo);

export default router;