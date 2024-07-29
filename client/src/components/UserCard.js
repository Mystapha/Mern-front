import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteuser } from '../redux/userslice';
import { useDispatch } from 'react-redux';
import Edituser from './Edituser';

function UserCard({user,ping,setping}) {
  const dispatch=useDispatch();
  return (
    <Card style={{ width: '18rem',backgroundColor:"#ebe0e0",height:"350px" }}>
    <Card.Img variant="top" src={user.posteur} style={{width:"75px",padding:"5px"}} />
    <Card.Body style={{textAlign:"center"}}>
      <Card.Title>{user.name}</Card.Title>
      <Card.Text>
        {user.lastname}
      </Card.Text>
   
      <Card.Text>
        {user.email}
      </Card.Text>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",placeItems:"center",alignItems:"center",marginTop:"110px"}}>
      <Button style={{backgroundColor:"red",border:"none" ,width:"50px",height:"35px"}} onClick={()=>
      {dispatch(deleteuser(user._id));
      setping(!ping);
      }}> x </Button>
      <Edituser user={user} ping={ping} setping={setping}/>
      </div>
    
    </Card.Body>
  </Card>
  )
}

export default UserCard
