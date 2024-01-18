import React, { useEffect } from 'react'
import "./Modal.css"

function Modal({ setModalOpen, task, index, setTasks, tasks }) {

  function handlerClickExit() {
    setModalOpen(false)
   
  }

  function handlerClickDelete() {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    setModalOpen(false)
  }


  return (
    <div className='modal'>

      <div className='header'>
        <p className='taskName'>Task: {task}</p>
        <button onClick={handlerClickExit} className='btnExit'>x</button>
      </div>

      <div className='btns' >
        <button onClick={handlerClickDelete} className='deleteBtn'>Delete</button>
      </div>

    </div>
  )
}

export default Modal  