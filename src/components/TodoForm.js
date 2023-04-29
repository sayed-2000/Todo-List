import React, { useState } from 'react';



function TodoForm({addTodo}) {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo(value);

        setValue("");
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' placeholder='Add your task' className='todo-input' value={value} onChange={(e) => (setValue(e.target.value))}/>
      <button type='submit' className='todo-btn'>Add</button>
    </form>
  )
};

export default TodoForm
