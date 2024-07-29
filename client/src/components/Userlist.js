import React from 'react'
import UserCard from './UserCard';
import { useSelector } from 'react-redux';
import Adduser from './Adduser';


function Userlist({ping,setping}) {

const users = useSelector((state) => state.user.userlist);
console.log(users);
  return (
    <>
    <div className="adduser">
      <h2 style={{fontSize:"25px",fontWeight:"bold",marginTop:"10px",marginLeft:"10px",color:"#0f0f2a9c"}}>Movie-Cards</h2>
      <Adduser ping={ping} setping={setping}/>
    </div>
    <div className="cards">
   {users?.map((el) => <UserCard user={el} ping={ping} setping={setping}/>)}
    </div>
    </>
  );
}

export default Userlist;
