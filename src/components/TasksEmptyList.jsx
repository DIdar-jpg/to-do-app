import React from 'react'

export default function TasksEmptyList() {
  return (
    <div className='d-flex w-100 h-100 justify-content-center align-items-center fs-3' style={{'min-height': '80vh', 'border': '6px dashed #212529'}}>
        <span style={{'cursor': 'pointer'}}>Create new Task!</span>
    </div>
  )
}
