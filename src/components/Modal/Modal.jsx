import React, { useEffect } from 'react'
import "./Modal.css"

function Modal({ setModalOpen, task }) {

  return (
    <div className='modal'>

      <div className='header'>
        <p className='taskName'>Task: {task}</p>
        <button onClick={() => setModalOpen(false)} className='btnExit'>x</button>
      </div>

      <div className='btns' >
        <button className='deleteBtn'>Delete</button>
      </div>

    </div>
  )
}

export default Modal  