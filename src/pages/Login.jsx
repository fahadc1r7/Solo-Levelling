import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { validateLogin } from '../utils/localstorage'


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError]= useState("")
    const navigate = useNavigate()

    const handleSubmit = (e)=> {
        e.preventDefault()
        setError("")

        if (!validateLogin(email,password)){
            setError("invalid email or password")
        }


         if (!email.trim() || !password.trim()){
            setError("Please enter both email and password")
            return
         }

        localStorage.setItem("useremail",email)
        navigate("/dashboard")
    }


  return (
    <div className='container mt-5 text-center'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className='d-flex flex-column align-items-center mt-4'>
            <input type="email"  className='form-control mb-3 ' style={{maxWidth:"300px"}} placeholder='Enter Email' onChange={(e)=> setEmail(e.target.value)} required/>
            <input type="password"  className='form-control mb-3 ' style={{maxWidth:"300px"}} placeholder='Enter password' value={password} onChange={(e)=> setPassword(e.target.value)} required/>
            {error && <p className='text-danger'>{error}</p>}
            <button className='btn btn-outline-success'>Login</button>
        </form>

        <p className='mt-3'>
            Don't have an account? <Link to="/signup" className="d-block">Sign Up</Link>
        </p>
        
    </div>
  )
}

export default Login