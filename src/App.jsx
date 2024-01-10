import React, { useEffect, useState } from 'react';
import "./App.css"
import Task from './components/Task/Task';
const App = () => {

  const [task, setTask] = useState([])
  function handlerClick() {

    setTask([...task, <Task />])
  }

  console.log(task)
  return (
    <>
      <section>

        <div>
          <h2 className='title'>My Task</h2>
        </div>


        <div className='list-task   '>
          {
            task.map((task) => (
              <div className='task'>
                <Task />
              </div>
            ))
          }
        </div>


        <div className='addTask'>
          <button onClick={handlerClick}  >+ Add Task</button>
        </div>
      </section>
    </>
  );
};


export default App
