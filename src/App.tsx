import React, { FC, useState, ChangeEvent } from "react";
import { ITask } from "./interfaces";
import Todotaks from "./Components/Todotaks";

import "./App.css";

function App() {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const handlechange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };
  const addTask = (): void => {
    const newtask = { taskname: task, deadline: deadline };

    setTodo([...todo, newtask]);
    setTask(" ");
    setDeadline(0);
  };

  const completetask = (tasknametodelete: string): void=> {
    setTodo(todo.filter((task) => {
      return task.taskname != tasknametodelete;
      
    }))
    
  }

  return (
    <div className="App">
      <div className="header-text"> <h1>TODO-List</h1></div>
      <div className="motivational-statement">
        <h3>It is never too late to be what you might have been</h3>
      </div>
     
      <div className="header">
        <div className="input_container">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handlechange}
          ></input>
         
          <input
            type="number"
            placeholder="Deadline (in days)..."
            name="deadline"
            value={deadline}
            onChange={handlechange}
          ></input>
        </div>
        <button onClick={addTask}> Add task </button>
      </div>
      <div className="todo-list">
        {todo.map((task: ITask, key: number) => {
          return <Todotaks key={key} task={task} completetask={completetask} />;
        })}
      </div>
    </div>
  );
}

export default App;
