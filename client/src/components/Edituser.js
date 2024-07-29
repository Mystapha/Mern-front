import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { useDispatch } from 'react-redux';
import { edituser } from '../redux/userslice';

function Edituser({ping,setping,user}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [edited, setedited] = useState({
      image:user.posteur,
      name:user.name,
      lastname:user.lastname,
      age:user.age,
      email:user.email
    })
    const dispatch = useDispatch();
  return (
    <div className="btn1">
    <Button style={{backgroundColor:"green",border:"none" ,width:"80px",height:"35px"}} onClick={handleShow}>
      Edit
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>image</Form.Label>
        <Form.Control type="text" placeholder={user?.posteur} onChange={(e)=>setedited({...edited, posteur:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" placeholder={user?.name} onChange={(e)=>setedited({...edited, name:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Lastname</Form.Label>
        <Form.Control type="text" placeholder={user?.lastname} onChange={(e)=>setedited({...edited, lastname:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>age</Form.Label>
        <Form.Control type="Number" placeholder={user?.age} onChange={(e)=>setedited({...edited, age:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>email</Form.Label>
        <Form.Control type="email" placeholder={user.email} onChange={(e)=>setedited({...edited, email:e.target.value})} />
      </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>{dispatch(edituser({id:user._id, edited}));setping(!ping);
             handleClose();}}>
          edit
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
);
}


export default Edituser
