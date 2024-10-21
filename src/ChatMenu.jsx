import React, { useEffect, useState } from 'react';
import './ChatMenu.css';
import { Avatar , IconButton } from '@material-ui/core';
import { AttachFile,  InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';
import { useParams } from 'react-router-dom';
import { db } from './firebase';
import { serverTimestamp } from 'firebase/firestore';



function ChatMenu({user}) { 
  const {roomId} = useParams()
  const [roomData,setRoomdata]=useState("")
  const [messages,setMessages]=useState([])
  const [input,setInput]=useState("")

  const sendMessage = (e) =>{
    e.preventDefault();
    db.collection('rooms').doc(roomId).collection("messages").add({
      message:input,
      name: user.displayName,
      timestamp:serverTimestamp()
    })
    setInput("")
  }


  useEffect( ()=> {
if(roomId){
  db.collection('rooms').doc(roomId).onSnapshot(snapshot => setRoomdata(snapshot.data()));

  db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => setMessages(snapshot.docs.map((doc) => doc.data())));
}
  },[roomId])

 
  return (
    <div className='chat container-fluid' >
    <div className='chat_header'>
    <Avatar src={roomData.roomPhoto} />
    <div className='chat_headerInfo'>
    <h2> {roomData.name} </h2>
    <p>{''} Last seen{''} { new Date(messages[0]?.timestamp?.toDate()).toUTCString()} </p>
    </div>
    <div className='chat_headerRight'>
    <IconButton> <SearchOutlined/> </IconButton>
      <IconButton> <AttachFile/> </IconButton>
      <IconButton> <MoreVert /> </IconButton>
    </div>
    </div>
    
    
    <div className='chat_body   '>
    { messages.map(message =>( 
        <p  
        className= {`chat_message ${message.name === user.displayName &&"chat_reciever" }`}>
                <span className='chat_name'>{message.name}</span>
          <span className='chat_message_'>{message.message}</span>
          <br />
          <span className='chat_timestamp'>
             {''} { new Date(messages[messages.length -1]?.timestamp?.toDate()).toUTCString()} 
          </span>
        </p>

      ))
    }
      </div>

    <div className= 'chat_footer'>
      <IconButton><InsertEmoticon/></IconButton>
      <form >
        <input type='text' value={input} onChange={e => setInput(e.target.value) } placeholder='Type a Message'></input>
        <button onClick={sendMessage}>  send </button>
      </form>
      <IconButton> <Mic /> </IconButton>

    </div>

    </div>
  )
}

export default ChatMenu
