import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";
import { addTask, deleteTask, fetchTask } from "../store";

export const Todo = () => {
  const [task, setTask] = useState("");

  const tasks = useSelector((state) => state.taskReducer.task);
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    dispatch(addTask(task));
    setTask("");
  };

  const handleTaskDelete = (index) => {
    dispatch(deleteTask(index));
  };

  const handleFetchTasks = () => {
    dispatch(fetchTask());
  };

  return (
    <div className="container">
      <div className="todo-app">
        <h1>📝 To-do List</h1>

        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button>Add Task</button>
        </form>

        <button onClick={handleFetchTasks}>Fetch Tasks</button>

        <ul>
          {tasks.map((curTask, index) => (
            <li key={index}>
              <span>{index + 1}. {curTask}</span>
              <MdDeleteForever
                style={{ cursor: "pointer", color: "red" }}
                onClick={() => handleTaskDelete(index)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
