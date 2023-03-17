import React,{useState,useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Todo = () => {
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(false);
    
    const handleTodoClick = (title) => {
      toast.dark(title);
    };

    const handleClick = () => {
      setLoading(true) ||
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => toast.error(`Error: ${error.message}`))
        .finally(() => setLoading(false))
    }
    const handleDoubleClick = (id) => {
      toast.error('Deleted Successfully!', {
        position: toast.POSITION.TOP_RIGHT,
        
    });
      setData((Todos) => Todos.filter((todo) => todo.id !== id));
    };
    return (
      <div className="App">
        <h1 className='App-header'>Todos List</h1>
        <button onClick={handleClick}>Fetch Todos</button>
        {loading &&
        <p>Loading...</p>
      }
        <ul>

          {data.map(todo => <li onDoubleClick={() => handleDoubleClick(todo.id)} 
          onClick={() => handleTodoClick(todo.title)} key={todo.id}><span className="dot"></span>{todo.title}</li>)}
          <ToastContainer />
        </ul>
      </div>
    );
}

export default Todo

