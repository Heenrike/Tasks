import React, { useEffect } from 'react'
import { RxExit } from "react-icons/rx";
import "./Modal.css"

function Modal({setModalOpen}) {

return (
  <div className='modal'> 
  <div className='btn'>
  <button onClick={()=> setModalOpen(false)} className='btnExit'><RxExit /></button> 

  </div>
  </div>
)
}

export default Modal  