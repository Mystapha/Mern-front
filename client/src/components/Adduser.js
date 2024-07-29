import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { adduser } from '../redux/userslice';
import { useDispatch } from 'react-redux';

function Adduser({ping,setping}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newuser, setnewuser] = useState({
      image:"",
      name:"",
      lastname:"",
      age:"",
      email:""
    })
    const dispatch = useDispatch();
  return (
    <div className="btn1">
    <Button style={{backgroundColor:"#41599df2",border:"none",boxShadow:"1px 1px 2px gray"}} variant="primary" onClick={handleShow}>
      Adding
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>image</Form.Label>
        <Form.Control type="text" placeholder="Enter your image" onChange={(e)=>setnewuser({...newuser, posteur:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" onChange={(e)=>setnewuser({...newuser, name:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Lastname</Form.Label>
        <Form.Control type="text" placeholder="Enter your lastname" onChange={(e)=>setnewuser({...newuser, lastname:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>age</Form.Label>
        <Form.Control type="Number" placeholder="Enter your age" onChange={(e)=>setnewuser({...newuser, age:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" onChange={(e)=>setnewuser({...newuser, email:e.target.value})} />
      </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>{dispatch(adduser(newuser));setping(!ping); handleClose()}}>
          add
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
);
}


export default Adduser
