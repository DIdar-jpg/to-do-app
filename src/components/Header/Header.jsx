import React, { useRef } from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

function Header({openModal, setCreateMode, handleSearchChange, resetSearchTerm}) {

  const formEl = useRef(null)

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">To Do App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='flex justify-content-between gap-3'>

            <Button variant="outline-primary my-3" onClick={ () => {
              openModal()
              setCreateMode()
            }}>
              Add new Task
            </Button>{' '}

            <Form 
            className="d-flex"
            ref={formEl}
            onSubmit={ e => {
              e.preventDefault()
              formEl.current.reset()
              resetSearchTerm()
            }}
            >
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={handleSearchChange}
                />
                <Button variant="outline-success py-2" style={{'width': '180px'}} type='submit'>Reset Search</Button>
            </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
