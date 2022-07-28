import React,{useState} from "react";
import ToDoList from "./ToDoList";

function App() {
  const [todos,setTodos] = useState(['todo1 ', 'todo 2']);
 return (
  <>
    <ToDoList todos ={todos} />
    <input type="text" />
    <button>Add To Do</button>
    <button>Clear Complete</button>
    <div>0 Left to do</div>
  </>
 
 );
}

export default App;
