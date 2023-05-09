import React from 'react';
import{v4 as uuidv4} from'uuid';
import { useState } from 'react';
import Test from './Test.js'
import './Cart.css'
const App = () => {
  const[input,setInput]=useState("");
  const[todos,setTodos]=useState([]);
  const handler=e=>{
    setInput(e.target.value)
  }
  const submit=e=>{
    e.preventDefault();
 
    setTodos([...todos,{id:uuidv4(),title:input,completed:false}])
setInput("")

  }
  return (
    <div><center>
    <div className='card'><form onSubmit={submit}>
      <input className='input' type="text"
      placeholder='Enter Here...'
      value={input}
      onChange={handler}
      autoFocus></input><br/>
      <button className='button' >Add</button>
<Test todos={todos} setTodos={setTodos}/>
    </form></div></center></div>
  );
};

export default App;