import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";
import { addTask, deleteTask } from "../store";

export const Todo = () => {
  const [task, setTask] = useState("");

  const tasks = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) return;

    dispatch(addTask(task));
    setTask(""); // clear input
  };

  const handleTaskDelete = (index) => {
    dispatch(deleteTask(index));
  };

  return (
    <div className="container">
      <div className="todo-app">
        <h1>📝 To-do List</h1>

        <div className="row">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Add a new task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button>Add Task</button>
          </form>
        </div>

        <ul>
          {tasks.map((curTask, index) => (
            <li key={index}>
              <p>{index + 1}. {curTask}</p>
              <MdDeleteForever
                className="icon-style"
                onClick={() => handleTaskDelete(index)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
