import pool from "../database/postgress.database.js";

// create a todo
const createTodo = async (req, res) => {
    try {
        const { description }  = req.body;

        const newTodo = await pool.query("INSERT INTO todo (description) VALUES ($1) RETURNING *", [description]);

        res.json(newTodo.rows);
    } catch (error) {
        console.error(error.message);
    }
};

// get all todos
const getTodos = async (req, res) => {
    try {
        const todos = await pool.query("SELECT * FROM todo");

        res.json(todos.rows);
    } catch (err) {
        console.error(err.message)
    }
};

// get a todo 
const  getTodo = async (req, res) => {
    try {
        const { id } = req.params

        const todo = await pool.query("SELECT * FROM todo WHERE id = $1", [id])

        res.json(todo.rows[0])
    } catch (err) {
        console.error(err.message)
    }
};

// update a todo
const updateTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const {description} = req.body;

        const todo = await pool.query("UPDATE todo SET description = $1 WHERE id = $2", [description, id]);

        res.json("Todo was updated");
    } catch (err) {
        console.error(err.message)
    }
};

// delete a todo 
const deleteTodo = async (req, res) => {
    try {
        const {id} = req.params;

        const todo = await pool.query("DELETE FROM todo WHERE id = $1", [id]);

        return res.json("Todo has been deleted");
    } catch (err) {
        console.error(err.message)
    }
};

export default {createTodo, getTodos, getTodo, updateTodo, deleteTodo}