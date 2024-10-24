import React, { useRef, useState } from 'react'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsCheck2 } from "react-icons/bs";

export default function TaskModal({show, closeModal, createTask}) {

    const formRef = useRef(null)

    const [ formData, setFormData ] = useState({
        'taskName': '',
        'taskDeadline': '',
        'taskDescription':  ''
    })

    const handleChange = e => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = e => { 
        e.preventDefault();
        createTask(formData.taskName, formData.taskDeadline, formData.taskDescription)
        formRef.current.reset()
        setFormData({
            'taskName': '',
            'taskDeadline': '',
            'taskDescription':  ''
        })
        closeModal()
    }
    return (
    <Modal
    show={show}
    onHide={closeModal}
    backdrop="static"
    keyboard={false}
    >
        <Form ref={formRef} onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Form.Group className="mb-1 w-75" controlId="formTaskName">
                    <Form.Label>Task Name</Form.Label>
                    <Form.Control 
                    required
                    type="text" 
                    placeholder="To establish a new nation..." 
                    name='taskName'
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
                    onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTaskDescription">
                    <Form.Label>Task description</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3}
                        name='taskDescription'
                        onChange={handleChange}
                    />
                </Form.Group>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                    closeModal()
                    formRef.current.reset()
                }}>
                    Close
                </Button>
                <Button variant="primary" type='submit' className='d-flex align-items-center gap-1'>
                    <span>Create</span>
                    <BsCheck2/>
                </Button>
            </Modal.Footer>
        </Form>
    </Modal>
    
    )
}

