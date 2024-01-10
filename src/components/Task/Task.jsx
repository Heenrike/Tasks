import React, { useEffect, useState } from 'react'

function Task() {
  const [input, setInput] = useState(true)
  const [value, setValue] = useState("")
  const [task, setTask] = useState("")

  function handleCLick(){
    setInput(false)
    setTask(value)
  }

  return (
    <div>
      {
        input && <>
          <input onChange={(e) => setValue(e.target.value)} value={value} type="text" />
          <button onClick={handleCLick}>Add</button>
        </>
      }
  
      <p>{task}</p>
 
    </div>
  )
}

export default Task