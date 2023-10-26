import React, { useState,useEffect } from 'react'
import auth from "../../firebase"

import {  onAuthStateChanged,createUserWithEmailAndPassword,signOut} from 'firebase/auth'
function SignUp() {
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const signUp =(e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password).then((userCredential)=>{
      console.log(userCredential)
    }).catch((error)=>{
      console.log(error)
    })
  }
  const [authUser, setauthUser]=useState(null)
    useEffect(()=>{
        const listen=onAuthStateChanged(auth, user => {
            if (user) {
                setauthUser(user)
            }
            else{
                setauthUser(null)
            }
        })
        return ()=>{
            listen();
        }
    },[])
    const userSignOut=()=>{
        signOut(auth).then(()=>{
            console.log('signed out successfully')
        }).catch(error=>console.log(error))
    }
  return (
    <div>
      <form onSubmit={signUp}>
        <h1>SignUp</h1>
        <input type="email" placeholder='enter your email' value={email}
        onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder='enter your password' value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <button type='submit'>SignUp</button>
      </form>
      <div>{authUser?<><p>{`Signed In as ${authUser.email}`}</p><button onClick={userSignOut}>SignOut</button></>:<p>Signed Out</p>}</div>
    </div>
  )
}

export default SignUp
