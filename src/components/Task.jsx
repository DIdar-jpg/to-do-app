import React, { useContext } from 'react'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { IconContext } from "react-icons";
import { FaRegEdit } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";

import { DeleteContext } from '../App.jsx'

export default function Task({taskName, taskDeadline, taskdecription, taskId}) {

  const deleteTask = useContext(DeleteContext);

  return (
    <Card style={{width: '30%'}}>
        <Card.Body>
            <Card.Title>{taskName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{taskDeadline}</Card.Subtitle>
            <Card.Text>
              {taskdecription}
            </Card.Text>
            
            <div className="d-flex align-items-center gap-2">
              <Button variant="primary" className='d-flex align-items-center gap-1'><span>Edit</span> <IconContext.Provider value={{color:'#fff'}}><FaRegEdit /></IconContext.Provider></Button>{' '}
              <Button variant="danger"  className='d-flex align-items-center gap-1' id={taskId} onClick={deleteTask} ><span>Delete</span> <IconContext.Provider value={{color:'#fff'}}><FiTrash /></IconContext.Provider></Button>{' '}
            </div>
        </Card.Body>
    </Card>
  )
}
