import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { emailExists, registerUser } from "../utils/localstorage"


const Signup = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confomPassword, setConformPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const isValidEmail = (email)=> /\S+@\S+\.\S+/.test(email)

    const handleSubmit = (e) =>{
        e.preventDefault()

        
    
        if(!isValidEmail(email)){
          setError("Please enter a valid email address")
          return
        }

        if(password.length<6){
          setError("Password must be at least 6 charecter")
          return
        }
        
        if(password!== confomPassword){
          setError("Password don not match")
          return
        }

        if(emailExists(email)) {
          setError("An account with this email already exists")
          return
        }

        registerUser(email, password)
        


        localStorage.setItem("username",email)
        navigate("/dashboard")
    }


  return (
    <div  className='container mt-5 text-center'>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} className='d-flex flex-column align-items-center mt-4'>
            <input type="email"
            className='form-control mb-3'
            style={{maxWidth:"300px"}}
            placeholder='Type your Email' 
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            required/>

            <input 
            type="password"
            className='form-control mb-3'
            style={{maxWidth:"300px"}}
            placeholder='Enter your password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            required />


            <input 
            type="password"
            className='form-control mb-3'
            style={{maxWidth:"300px"}}
            placeholder='Conform your password'
            value={confomPassword}
            onChange={(e)=> setConformPassword(e.target.value)}
            required />

            {error && <p className='text-danger'>{error}</p>}

        <button type='submit' className='btn btn-outline-dark'>Sign Up</button>

        </form>
          
          <p className='mt-3'>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        
    </div>
  )
}

export default Signup