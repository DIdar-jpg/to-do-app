import React, { useContext } from 'react'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { IconContext } from "react-icons";
import { FaRegEdit } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";

import { TaskContext } from '../App.jsx'

export default function Task({taskName, taskDeadline, taskDecription, taskId}) {

  const { deleteTask, handleShow, setEditMode, setCurrentTask } = useContext(TaskContext);
  

  return (
    <Card className='task-card'>
        <Card.Body>
            <Card.Title>{taskName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{taskDeadline}</Card.Subtitle>
            <Card.Text>
              {taskDecription}
            </Card.Text>
            
            <div className="d-flex align-items-center gap-2">
              <Button variant="primary" className='d-flex align-items-center gap-1' onClick={ () => {
                setEditMode()
                setCurrentTask(taskId)
                handleShow()
              }}>
                <span>Edit</span> <IconContext.Provider value={{color:'#fff'}}><FaRegEdit /></IconContext.Provider>
              </Button>{' '}
              <Button variant="danger"  className='d-flex align-items-center gap-1' onClick={ () => deleteTask(taskId) } ><span>Delete</span> <IconContext.Provider value={{color:'#fff'}}><FiTrash /></IconContext.Provider></Button>{' '}
            </div>
        </Card.Body>
    </Card>
  )
}
