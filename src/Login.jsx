import React from 'react'
import { auth, provider } from './firebase'
import { Button } from '@material-ui/core'
import AppIcon from './assets/AppIcon.png'
import "./Login.css"
function Login ({setUser}){
    const signIn = () => {
      auth.signInWithPopup(provider).then((result) => { sessionStorage.setItem('user', JSON.stringify(result.user));
        setUser(result.user)}).catch((err)=> alert(err.message));
    }
  return (
    <>
    <div className='login'>
    <h2><span className='F1'>Chat</span> <span className='F2'>Stream</span></h2>
    <img src= {AppIcon} />
    <Button type='Submit' onClick={signIn}>
    <p> Sign in with <span className='G'>G</span><span className='O'>O</span><span className='O2'>O</span><span className='G2'>G</span><span className='L'>L</span><span className='E'>E</span></p></Button> 
    </div>
    </>
    )
}

export default Login