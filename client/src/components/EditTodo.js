import React, { Fragment, useState } from 'react'

const EditTodo = ({ todo }) => {
    const [ description, setDescription] = useState(todo.description)

    const updateDescription = async e => {
        e.preventDefault();
        try {
            const body = { description };
            await fetch("http://localhost:8080/api/todos/"+ todo.id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body),
            });

            window.location = "/";

        } catch (err) {
            console.error(err.message)
        }
    };

  return (
    <Fragment>
        
            <button type="button" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target={`#modal-${todo.id}`}>
            Edit
            </button>

            
            <div className="modal fade" id={`modal-${todo.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"  onClick={() => setDescription(todo.description)}>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Edit Todo</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setDescription(todo.description)}></button>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder={description} onChange={e => setDescription(e.target.value)} />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => setDescription(todo.description)}>Close</button>
                    <button type="button" className="btn btn-success" onClick={e => updateDescription(e)}>Save Changes</button>
                </div>
                </div>
            </div>
            </div>
    </Fragment>
  )
}

export default EditTodo