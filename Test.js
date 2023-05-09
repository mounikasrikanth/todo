import React from 'react';

const Test = ({todos,setTodos}) => {
  const deleteHandler=({id})=>{
    setTodos(todos.filter((todo)=>todo.id!==id))
  }
  return (
    <div>
      {todos.map((todo)=><li key={todo.id}>
      <input className='inp' type="text" value={todo.title}/>
      <button className='button_1' onClick={()=>deleteHandler(todo)}>X</button>

      </li>)}

    </div>
  );
};

export default Test;