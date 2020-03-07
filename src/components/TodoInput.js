import React from "react";

const TodoInput = ({ handleInput, input, handleSelected }) => {
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Add a task..."
        value={input}
        onChange={e => handleInput(e)}
      />
      <select className="select" onChange={e => handleSelected(e)}>
        <option value="" selected disabled hidden>
          Select priority of your task
        </option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
  );
};

export default TodoInput;
