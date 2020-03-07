import React, { useState, useEffect } from "react";
import "./App.css";

import TodoContainer from "./components/TodoContainer";
import Todos from "./components/Todos";
import TodoInput from "./components/TodoInput";

import { v4 as uuidv4 } from "uuid";

function App() {
  const [error, setError] = useState("");
  const [selected, setSelected] = useState("");
  const [input, setInput] = useState("");
  const [todos, setTodo] = useState([]);

  const handleInput = e => setInput(e.target.value);

  const handleSelected = e => setSelected(e.target.value);

  const addTodo = e => {
    e.preventDefault();
    const id = uuidv4();
    const text = input.trim();
    const completed = false;
    const priority = selected;
    const todoItem = { id, text, priority, completed };
    if (text && priority) {
      setInput("");
      setTodo([
        ...todos,
        {
          id,
          text,
          priority,
          completed
        }
      ]);
      setError("");
      addToLocalStorage(todoItem);
    } else {
      setError("PLEASE COMPLETE ALL THE FIELDS");
    }
  };

  const getFromLocalStorage = () => {
    const todosList = JSON.parse(localStorage.getItem("todos"));
    if (todosList) return todosList;
    return [];
  };

  const deleteFromLocalStorage = id => {
    let todos = getFromLocalStorage();
    todos = todos.filter(todo => todo.id !== id);
    localStorage.clear();
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addToLocalStorage = todo => {
    const todosItems = getFromLocalStorage();
    todosItems.push(todo);
    localStorage.setItem("todos", JSON.stringify(todosItems));
  };

  const updateLocalStorage = () => {
    localStorage.clear();
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const deleteTodo = e => {
    const id = e.target.parentElement.parentElement.getAttribute("data-id");
    let todoLocal = todos.filter(todo => todo.id === id);
    let todosItems = todos.filter(todo => todo.id !== id);
    deleteFromLocalStorage(todoLocal[0].id);
    setTodo(todosItems);
  };

  const handleCheckbox = e => {
    const id = e.target.parentElement.parentElement.getAttribute("data-id");
    console.log(id);
    let newTodos = [...todos];
    const index = newTodos.findIndex(todo => todo.id === id);
    newTodos[index].completed = !newTodos[index].completed;
    setTodo(newTodos);
    updateLocalStorage();
  };

  const clearAll = () => {
    localStorage.clear();
    setTodo([]);
    setError("");
  };

  useEffect(() => {
    setTodo(getFromLocalStorage());
  }, []);

  return (
    <>
      <TodoContainer>
        <TodoInput
          handleInput={handleInput}
          handleSelected={handleSelected}
          input={input}
        />
        {todos.length && (
          <button className="clear" onClick={clearAll}>
            CLEAR
          </button>
        )}
        {error && <p className="error">{error}</p>}
        <Todos
          todos={todos}
          deleteTodo={deleteTodo}
          handleCheckbox={handleCheckbox}
        />
        <button onClick={e => addTodo(e)} className="add">
          +
        </button>
      </TodoContainer>
    </>
  );
}

export default App;
