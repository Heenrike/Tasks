import React, { useEffect, useRef, useState } from 'react'
import { IoAdd } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import "./Task.css"
import Modal from '../Modal/Modal';
function Task({ index, setCheck, tasks, setTasks }) {
  const [input, setInput] = useState(true)
  const [modal, modalStats] = useState()
  const [value, setValue] = useState("")
  const   [modalOpen, setModalOpen] = useState(false)
  const [task, setTask] = useState("")

  const refInput = useRef()

  function handleModal() {
   setModalOpen(true)

  }

  function handleCLick() {

    setInput(false)

    if (value === "") {
      const newTasks = tasks.filter((_, i) => i !== index);
      setTasks(newTasks);
      console.log(newTasks);
    }

    setCheck(true)
    setTask(value)
  }

  useEffect(() => {
    refInput.current.focus()
    setCheck(false)

  }, [setCheck])

  return (
    <div className='containerTask'>
      {
        input && <>
          <input className='input' ref={refInput} onChange={(e) => setValue(e.target.value)} value={value} type="text" />
          <button onClick={handleCLick} className="btn"><IoAdd /></button>
        </>
      }
      {
        task !== "" && (
          <div className='task'>
            <p style={{ padding: "0, 20px" }}>{task} </p>
            <button className='options' onClick={handleModal} > <SlOptions /> </button>
          </div>
        )

      }
 {
  modalOpen && <Modal setModalOpen={setModalOpen}/>
 }


    </div>
  )
}

export default Task