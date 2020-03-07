import React from "react";

const Todo = ({
  text,
  id,
  completed,
  deleteTodo,
  priority,
  handleCheckbox
}) => {
  let priorityType = "";
  let todoItem;
  if (priority.toLowerCase() === "low") priorityType = "low";
  if (priority.toLowerCase() === "medium") priorityType = "medium";
  if (priority.toLowerCase() === "high") priorityType = "high";

  if (completed) {
    todoItem = (
      <div className="todo" data-id={id}>
        <span className="todo-check">
          <i className="fas fa-check"></i>
        </span>
        <span className="todo-text-completed">{text}</span>
        <span className={`priority priority-${priorityType}`}>
          {priority.toUpperCase()}
        </span>
        <span onClick={deleteTodo} className="btn-delete">
          <i className="fas fa-trash-alt"></i>
        </span>
      </div>
    );
  } else {
    todoItem = (
      <div className="todo" data-id={id}>
        <span className="todo-check">
          <input type="checkbox" onChange={handleCheckbox} className="check" />
          <span className="checkmark"></span>
        </span>
        <span className="todo-text">{text}</span>
        <span className={`priority priority-${priorityType}`}>
          {priority.toUpperCase()}
        </span>
        <span onClick={deleteTodo} className="btn-delete">
          <i className="fas fa-trash-alt"></i>
        </span>
      </div>
    );
  }

  return <>{todoItem}</>;
};

export default Todo;
