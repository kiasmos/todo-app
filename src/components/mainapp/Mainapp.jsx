import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";

export default function Mainapp() {
  //todo asagida olan listdir
  const [todos, setTodos] = useState([]);
  //inputa daxil edilecek melumati saxlayir
  const [inputValue, setInputValue] = useState("");

  //add todonu click etdiyimde ise dusur
  const handleClick = () => {
    setTodos((prev) => [...prev, inputValue]);
    setInputValue("");
  };

  //id = ne silinecekse onu temsil edir
  const handleDelete = (id) => {
    const newArray = todos.filter((el, index) => index != id);
    setTodos(newArray);
    console.log(newArray);
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
          //input bos olanda islemir
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
