import React from "react";
import ToDoList from "./ToDoList";

function App() {
 return (
  <>
    <ToDoList />
    <input type="text" />
    <button>Add To Do</button>
    <button>Clear Complete</button>
    <div>0 Left to do</div>
  </>
 
 );
}

export default App;
