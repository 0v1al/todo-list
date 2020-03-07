import React from "react";

import Todo from "./Todo";

const Todos = ({ todos, deleteTodo, handleCheckbox }) => {
  return (
    <div className="todos">
      {todos.length > 0 ? (
        todos.map(todo => (
          <Todo
            key={todo.id}
            {...todo}
            deleteTodo={e => deleteTodo(e)}
            handleCheckbox={handleCheckbox}
          />
        ))
      ) : (
        <p className="no-todo">there are no todo added</p>
      )}
    </div>
  );
};

export default Todos;
