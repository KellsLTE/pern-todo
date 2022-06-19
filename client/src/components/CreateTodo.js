import React, { Fragment, useState } from 'react'

const CreateTodo = () => {
    const [description, setDescription] = useState("");

    const submitForm = async e => {
        e.preventDefault();
        try {
            const body = { description };

            const response = await fetch("http://localhost:8080/api/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            
            if(response.status === 200) {
                window.location = "/";
            }
        } catch (err) {
            console.error(err.message)
        }
    }

  return (
    <Fragment>
        <h1 className="text-center mt-5">Pern Todo List</h1>
        <form className='my-4' onSubmit={submitForm}>
            <div className="form-group mx-auto d-flex w-16">
                <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} placeholder="Hello, enter a todo item to get started!" />
                <button className="btn btn-md btn-success">Add</button>
            </div>
        </form>
    </Fragment>
  )
}

export default CreateTodo