import React from "react";

const TodoContainer = ({ children }) => {
  return (
    <div className="container-todo">
      <div className="header">
        <h3 className="title">
          <i class="fas fa-list-alt"></i>Add Your Task for Today
        </h3>
      </div>
      {children}
    </div>
  );
};

export default TodoContainer;
