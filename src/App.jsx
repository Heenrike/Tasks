import React, { useEffect, useState } from "react";
import "./App.css";
import Task from "./components/Task/Task";
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [check, setCheck] = useState(true)

  function handlerClick() {

    if (check) setTasks([...tasks, <Task />]);
  }


  return (
    <>
      <section>
        <div>
          <h2 className="title">My Task
            {
              tasks.length > 0 && <span> : {tasks.length}</span>
            }</h2>
        </div>

        <div className="list-task   ">
          {tasks.map((task, index) => (

            <div key={index} className="task">
              <Task setTasks={setTasks} setCheck={setCheck} tasks={tasks} index={index} />
            </div>
          ))}
        </div>

        <div className="addTask">
          <button onClick={handlerClick}>+ Add Task</button>
        </div>
      </section>
    </>
  );
};

export default App;
