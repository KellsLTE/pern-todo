import React, { Fragment, useState, useEffect } from 'react'
import EditTodo from './EditTodo';

const ListTodos = () => {

    const [todos, setTodos] = useState([])

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/todos");

            const data = await response.json()

            setTodos(data)
        } catch (err) {
            console.error(err.me)
        }
    }

    useEffect(() => {getTodos()}, [])
    let row = 1;

    const deleteTodo = async id => {
        try {
            await fetch("http://localhost:8080/api/todos/" + id, {
                method: "DELETE"
            });

            setTodos(todos.filter(todo => todo.id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

  return (
    <Fragment>
        <table className="table text-center my-8">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map(todo => (
                        <tr key={todo.id}>
                            <td>{row++}</td>
                            <td>{todo.description}</td>
                            <td className='d-flex justify-content-evenly'>
                                <EditTodo todo={todo} />
                                <button className="btn btn-sm btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </Fragment>
  )
}

export default ListTodos