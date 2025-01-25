import React, { useState } from "react";

const Home = () => {
  const [tasks, setTasks] = useState([]); 
  const [taskInput, setTaskInput] = useState(""); 
  const [hoveredTask, setHoveredTask] = useState(null); 

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput]);
      setTaskInput(""); 
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleMouseEnter = (index) => {
    setHoveredTask(index); 
  };

  const handleMouseLeave = () => {
    setHoveredTask(null); 
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="row d-flex">
        <h1 className="d-flex justify-content-center">Todo</h1>
        <div className="col"></div>
        <form onSubmit={handleAddTask}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add another task"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
            />
          </div>
          <div>
            <h1 className="d-flex justify-content-center">Task List</h1>
          </div>
          <div>
            <ul className="list-group">
              {tasks.length === 0 && (
                <li className="list-group-item d-flex justify-content-center">
                  No tasks pending, add a task
                </li>
              )}
              {tasks.map((task, index) => (
                <li
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>{task}</span>
                  {hoveredTask === index && (
                    <i
                      className="fa-solid fa-trash"
                      onClick={() => handleDeleteTask(index)}
                      style={{ cursor: "pointer" }}
                    ></i>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-primary d-flex align-items-center m-auto justify-content-center mt-3"
            >
              Add task to list
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
