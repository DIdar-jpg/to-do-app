import React, { useRef, useState, useContext, useEffect } from 'react'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsCheck2 } from "react-icons/bs";

import { TaskContext } from '../App.jsx'

export default function TaskModalTest({show, closeModal, createTask}) {

    const { currentTarget, tasks, deleteTask, modalMode} = useContext(TaskContext);


    console.log(modalMode)
    // const formRef = useRef(null)
    const [ formData, setFormData ] = useState(
        modalMode === 'edit' 
        ? 
        tasks.filter( item => item.taskId === currentTarget)[0]
        :
        {
            'taskName': '',
            'taskDeadline': '',
            'taskDescription':  '',
            'taskId':  ''
        }


    )
    useEffect( () => {
        setFormData(modalMode === 'edit' 
            ? 
            tasks.filter( item => item.taskId === currentTarget)[0]
            :
            {
                'taskName': '',
                'taskDeadline': '',
                'taskDescription':  '',
                'taskId':  ''
            })
    }, [modalMode, currentTarget])

    const editTask = () => {
        const taskIndex = tasks.indexOf(formData)
        console.log([...tasks.slice(0, taskIndex - 1), formData, ...tasks.slice(taskIndex + 2)])
        // setFormData([
            
        // ])

        // tasks[taskIndex].taskName = formData.taskName
        // tasks[taskIndex].taskDeadline = formData.taskDeadline
        // tasks[taskIndex].taskDescription = formData.taskDescription
    }

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
        ?
        editTask()
        :
        createTask(formData.taskName, formData.taskDeadline, formData.taskDescription)

        setFormData({
            'taskName': '',
            'taskDeadline': '',
            'taskDescription':  ''
        })
        // formRef.current.reset()
        closeModal()
    }
    return (
    <Modal
    show={show}
    onHide={closeModal}
    backdrop="static"
    keyboard={false}
    >
        {/* ref={formRef} */}
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
                    closeModal()
                    // formRef.current.reset()
                }}>
                    Close
                </Button>
                <Button variant="primary" type='submit' className='d-flex align-items-center gap-1'>
                    { modalMode === 'edit' ? <span>Edit</span> : <span>Create</span>}
                    <BsCheck2/>
                </Button>
            </Modal.Footer>
        </Form>
    </Modal>
    
    )
}

