import React, { useContext, useState } from 'react'
import { myContext } from './Context'

const LoginPage = () => {
const [user, setuser] = useState({
    username:"",
    password:""
})
  const {login}=  useContext(myContext)

  const handleLogin=()=>{
    if(user.username==="avi" && user.password==="123"){
login()
    }else{
        alert("please enter correct creadentgial")
    }
}
  return (
    <div>

        <h1>LoginPage</h1>
        <input type="text" placeholder='username' onChange={(e)=>{
            setuser({...user,username:e.target.value})
        }}/>
        <input type="text" placeholder='password' onChange={(e)=>{
            setuser({...user,password:e.target.value})
        }}/>
        <button onClick={handleLogin}>Login</button>
 
    </div>
  )
}

export default LoginPage