import React, { useContext } from 'react'

import { TaskContext } from '../App.jsx'

import { FaRegSquarePlus } from "react-icons/fa6";


export default function TasksEmptyList() {

  const { handleShow } = useContext(TaskContext)

  return (
    <div className='d-flex w-100 h-100 justify-content-center align-items-center fs-3' style={{'min-height': '80vh', 'border': '6px dashed #212529'}}>
        <button className='empty-list-btn' onClick={handleShow}>
          <span>Create new Task</span>
          <FaRegSquarePlus />
          </button>
    </div>
  )
}
