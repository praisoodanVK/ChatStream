import React, { useEffect, useState } from 'react';
import './Sidechat.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Avatar } from '@material-ui/core';
import { db } from './firebase';
import { Link } from 'react-router-dom';

const Sidechat = ({id , name , Photo ,addNewChat}) => {
  const [messages,setMessages]=useState("")

  useEffect(()=>{
    if(id){
       db.collection("rooms").doc(id).collection("messages").orderBy("timestamp","desc").onSnapshot(snapshot=> setMessages(snapshot.docs.map(doc => doc.data())));
    }
   

  },[id]);

  const createChat = () =>{
    const roomName = prompt('Please Enter the Room Name')
    const roomPhoto = prompt('Please Enter the Room Photo URL')

    if(roomName && roomPhoto){
      db.collection('rooms').add({
        name:roomName,
        roomPhoto:roomPhoto,
      })
    }
  }
  


  return  !addNewChat ? 
  <Link to={`/rooms/${id}`}  > 

  <div className='sidechat col-12 col-md-4' >
  <Avatar  src={Photo}  />
  <div className='sideChat_info '>
    <h2> { name } </h2>
    <p> {messages[0] ?. message}</p>
  </div>
  </div>

  </Link>
: (
    <div onClick={createChat} className='sidechat'>
    <h2> Add New Chat </h2>
  
      
    </div>
  )
}

export default Sidechat
