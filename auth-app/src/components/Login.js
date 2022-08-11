import React, {useState} from 'react'
import axios from "axios"
import { Navigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import {login} from "../redux/userSlice"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password
    };
    console.log(userData)
    
    axios.post("http://localhost:4000/login", userData).then((response) => {
      if(response.status === 200){
        console.log(response.data);
        localStorage.setItem('user_id', response.data.user._id);
        localStorage.setItem('token', response.data.token);
        dispatch(login())
      }
    });
  }

  const handleReg = () => {
    console.log("handle Reg")
    {<Navigate to="/reg" replace={true} />}
  }

  return (
    <div className="p-5 m-0 border-0 bd-example">
      <div className='text-center h2'>Login</div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <Link 
        to="/reg"
        className="btn btn-warning mt-2"
      >
        Registration
      </Link>
    </div>
  )
}

export default Login