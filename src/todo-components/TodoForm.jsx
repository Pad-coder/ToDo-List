import React, { useState } from "react";

function TodoForm({ addTodo,isEditing,setIsEditing }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      name,
      description,
      completed: false,
    });
    setName("");
    setDescription("");
  };
  return (
    <>
      <div className="pb-2">
        <div className="card">
        <div className="d-flex flex-row align-items-center">
          <div className="card-body">
           
            <form onSubmit={handleSubmit} className="d-flex flex-row align-items-center">
              <input
                type="text"
                placeholder="Name"
                className="form-control form-control-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
                
              />
              <input
                type="text"
                placeholder="Description"
                className="form-control form-control-sm"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button type="submit" className="btnadd">
                Add
              </button>
            </form>
            
          </div>
        </div>
      </div>
      </div>
      <hr className="my-4" />
    </>
  );
}

export default TodoForm;
