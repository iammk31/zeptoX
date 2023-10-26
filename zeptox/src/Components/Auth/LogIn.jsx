import React, {useState} from 'react'
import auth from "../../firebase"
import { signInWithEmailAndPassword } from 'firebase/auth'

function LogIn() {
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const logIn =(e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password).then((userCredential)=>{
      console.log(userCredential)
    }).catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div>
      <form onSubmit={logIn}>
        <h1>LogIn</h1>
        <input type="email" placeholder='enter your email' value={email}
        onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder='enter your password' value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <button type='submit'>LogIn</button>
      </form>
    </div>
  )
}

export default LogIn