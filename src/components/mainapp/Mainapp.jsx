import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";

export default function Mainapp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  //We update state and
  //clear input value
  const handleClick = () => {
    setTodos((prev) => [...prev, inputValue]);
    setInputValue("");
  };

  //We filter the state and save it to array
  //Filtering: Not including the item with clicked item's index
  const handleDelete = (id) => {
    const newArray = todos.filter((el, index) => index != id);
    setTodos(newArray);
  };

  return (
    <div className="wrapper">
      <p className="wrapper-heading">What is the plan for today ?</p>
      <div className="add-task">
        <input
          className="addinput"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Add a todo"
        />
        <button
          className="addtodo-button"
          onClick={handleClick}
          disabled={inputValue.trim("") === ""}
        >
          Add Todo
        </button>
      </div>
      <div className="todos-wrapper">
        {todos.map((el, index) => (
          <TodoItem
            key={index}
            name={el}
            id={index}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
