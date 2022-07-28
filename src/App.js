import React,{useState, useRef, useEffect} from "react";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos,setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify)

  }, [todos])

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if(name == "") return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete:false}]
    })
    todoNameRef.current.value=null;


  }
 return (
  <>
    <ToDoList todos ={todos} />
    <input ref={todoNameRef} type="text" />
    <button onClick={handleAddTodo}>Add To Do</button>
    <button>Clear Complete</button>
    <div>0 Left to do</div>
  </>
 
 );
}

export default App;
