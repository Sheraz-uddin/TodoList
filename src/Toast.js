import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// function TodoItem({ todo, onDelete, onShowUser }) {
//   return (
//     <li onDoubleClick={onDelete} onClick={onShowUser}>
//       {todo.title}
//     </li>
//   );
// }

function Toast() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleTodoClick = (title) => {
    toast.dark(title);
  };

  // const handleShowUser = (todo) => {
  //   fetch(`https://jsonplaceholder.typicode.com/todos/title`)
  //     .then((response) => response.json())
  //     .then((todos) =>
  //       toast.dark( "hello" , {
  //         position: "top-right",
  //       })
  //     );
  // };
const handleClick = () => {
  setLoading(true) ||
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => setTodos(data))
    .catch((error) => toast.error(`Error: ${error.message}`))
    .finally(() => setLoading(false))
}

  return (
    <div>
      <button
        onClick={() =>handleClick()}
      >
        Fetch Todos
      </button>
      {loading &&
        <p>Loading...</p>
      }
        <ul>
        {todos.map(todo => <li onDoubleClick={() => handleDeleteTodo(todo.id)}   onClick={() => handleTodoClick(todo.title) }
         key={todo.id}><span className="dot"></span>{todo.title}</li>)}
          {/* {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={() => handleDeleteTodo(todo.id)}
              onShowUser={() => handleShowUser(todo)}
            />
          ))
          } */}
        </ul>
      
      <ToastContainer />
    </div>
  );
}

export default Toast;
