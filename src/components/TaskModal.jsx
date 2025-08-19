import React, { useState, useContext, useEffect } from 'react'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { BsCheck2 } from "react-icons/bs";
import { TiEdit } from "react-icons/ti";

import { TaskContext } from '../App.jsx'

export default function TaskModal({show}) {

    const { tasks, modalMode, handleClose, addTask, editTask, setCreateMode, currentTask } = useContext(TaskContext)

    const [ formData, setFormData ] = useState({
        'taskName': null,
        'taskDeadline': null,
        'taskDescription':  null,
        'taskId': null
    })

    useEffect(() => {  
        modalMode === 'edit' 
        ? setFormData(...tasks.filter( task => task.taskId === currentTask ))
        : setFormData({
            'taskName': null,
            'taskDeadline': null,
            'taskDescription':  null,
            'taskId': null
        })
        
    }, [modalMode])

    const handleChange = e => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = e => { 
        e.preventDefault();
        modalMode === 'edit'
        ? editTask(formData)
        : addTask(formData.taskName, formData.taskDeadline, formData.taskDescription)

        setFormData({
            'taskName': '',
            'taskDeadline': '',
            'taskDescription':  '',
            'taskId': null
        })
        setCreateMode()
        handleClose()
    }
    
    return (
    <Modal
    show={show}
    onHide={() => {  
        handleClose()
        setCreateMode()
    }}
    backdrop="static"
    keyboard={false}
    >
        <Form  onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Form.Group className="mb-1 w-75" controlId="formTaskName">
                    <Form.Label>Task Name</Form.Label>
                    <Form.Control 
                    required
                    type="text" 
                    placeholder="To establish a new nation..." 
                    name='taskName'
                    value={formData.taskName}
                    onChange={handleChange}
                    />
                </Form.Group>
            </Modal.Header>

            <Modal.Body>
                <Form.Group className="mb-3" controlId="formTaskDeadline">
                    <Form.Label>Task Deadline</Form.Label>
                    <Form.Control 
                    type='date' 
                    placeholder="Date" 
                    name='taskDeadline'
                    value={formData.taskDeadline}
                    onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTaskDescription">
                    <Form.Label>Task description</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3}
                        name='taskDescription'
                        value={formData.taskDescription}
                        onChange={handleChange}
                        
                    />
                </Form.Group>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                    handleClose()
                    setCreateMode()
                }}>
                    Close
                </Button>
                { 
                    modalMode === 'edit' 
                    ?
                    <Button variant="primary" type='submit' className='d-flex align-items-center gap-1'>
                        <span>Edit</span><TiEdit/>
                    </Button>
                    : 
                    <Button variant="primary" type='submit' className='d-flex align-items-center gap-1'>
                        <span>Create</span><BsCheck2/>
                    </Button>
                }


            </Modal.Footer>
        </Form>
    </Modal>
    
    )
}

