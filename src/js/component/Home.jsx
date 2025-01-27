import React, { useState } from "react";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [hoveredTask, setHoveredTask] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredTask(index);
  };

  const handleMouseLeave = () => {
    setHoveredTask(null);
  };

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

  return (
    <div className="container">
      <h1 className="text-center mt-5">Todo List</h1>
      <div className="input-group mb-3">
        <form className="w-100" onSubmit={handleAddTask}>
          <input
            type="text"
            className="form-control"
            placeholder="Add a task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
        </form>
      </div>
      <div className="mt-2">
        <h1 className="text-center">Task list</h1>
        <ul className="list-group">
          {tasks.length === 0 ? (
            <li className="list-group-item d-flex justify-content-start">
              No tasks, add a task
            </li>
          ) : (
            tasks.map((task, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <span>{task}</span>
                {hoveredTask === index && (
                  <i
                    className="fa-solid fa-trash"
                    onClick={() => handleDeleteTask(index)}
                  ></i>
                )}
              </li>
            ))
          )}
		  <li className="list-group-item list-group-item-light d-flex justify-content-end">{tasks.length} remaining</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

