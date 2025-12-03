import { useState } from "react";
import "./Todo.css";
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return;

    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }

    setTask((prev) => [...prev, inputValue]);
    setInputValue("");

    // Set Date & Time
   

    setInterval(() => { const now = new Date();
    setDate(now.toLocaleDateString());
    setTime(now.toLocaleTimeString());
}, 1000)
  };



  // todo handleDeleteTodo function 

  const handleDeleteTodo = (value) => {
      console.log(task);   
      console.log(value);
      const upatedTask = task.filter((curTask) => curTask === value); 
      setDate(upatedTask)
  }


  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <h2 className="date-time">
          {date && `${date} - ${time}`}
        </h2>
      </header>

      <section>
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(event) => handleInputChange(event.target.value)}
            />
          </div>

          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>

      <section className="myUnOrdList">
        <ul>
          {task.map((curTask, index) => {
            return (
              <li key={index} className="todo-item">
                <span>{curTask}</span>
                <button className="check-btn"><MdCheck /></button>
                <button className="delete-btn" onClick={() => handleDeleteTodo (curTask)}><MdDeleteForever /></button>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};
