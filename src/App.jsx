import React, { useState } from "react"
import Chat from "./ChatMenu"
import Sidebar from "./Side_bar"
import "./App.css"
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from "./Login" 

function App() {
const [ user,setUser]= useState(sessionStorage.getItem('user') ?JSON.parse(sessionStorage.getItem('user')):"")


  return !user ? ( <Login setUser={setUser} /> ) :  
      (<>
      <div className='app'>
      <div className='app_body'>
      <BrowserRouter>
      <Sidebar setUser = {setUser} user={user}/>
      <Routes>
      <Route path="/rooms/:roomId" element={<Chat user={user} />}/>
      <Route path="/" element= { <Chat user={user}/>}/>
      </Routes>
      </BrowserRouter>
       </div>
      </div>
    </>
    )}

export default App