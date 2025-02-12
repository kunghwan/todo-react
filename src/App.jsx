import "./style.css";
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const App = () => {
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   console.log(requirement)
  //   console.log(detail)
  // }, [requirement, detail])
  return (
    <div>
      <TodoForm />
      <ul>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  );
};

export default App;
