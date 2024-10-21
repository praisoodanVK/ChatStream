import React, { useEffect, useState } from 'react'
import "./sidebar.css"
import Sidechat from './Sidechat'
import {Avatar, IconButton } from "@material-ui/core" 
import { DepartureBoardRounded, DonutLarge } from '@material-ui/icons'
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { db } from './firebase'



function sidebar({setUser , user}) {
  const [room , setRoom]=useState([]);

  useEffect(()=>{
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot)=> setRoom(snapshot.docs.map(doc => ({
      id: doc.id,
      data: doc.data(),
    }))))
    return() => unsubscribe ()
  },[]);

  return (
    <>
     <div className='sidebar'>
    
      <div className='sidebar_header'>
      <Avatar src={user.photoURL} />
      <div className='sidebar_headerRight'>
      <IconButton><DonutLarge/></IconButton>
      <IconButton><ChatIcon /></IconButton>
      <IconButton><MoreVertIcon /></IconButton>
      
      </div>
      </div>
      
      
      <div className='sidebar_search'>
      <div className='sidebar_searchcontainer'>
      <SearchIcon />
      <input  placeholder=' Search Chat' type='text'/>
      </div>
      </div>

      
      <button className="Logout_btn" onClick={ ()=> {sessionStorage.setItem('user', "") ; setUser("")}}>
      <h2> LOG OUT </h2>
      </button>

      <div className='sidebar_chats '>
      
     
      <Sidechat addNewChat  />
      
    
      {
        
        room.map(room=>(
          <Sidechat 
          key={room.id} 
          id={room.id}
          name={room.data.name} 
          Photo={room.data.roomPhoto}  
          />
        ))}

      </div>
      </div>
      
      </>

    )
   
}

export default sidebar
