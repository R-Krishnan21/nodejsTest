import React, {useState} from 'react'
import axios from "axios"
import { useNavigate, Link } from "react-router-dom";

function Reg() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name: name,
      email: email,
      password: password,

    };
    console.log(userData)
    
    axios.post("http://localhost:4000/register", userData).then((response) => {
      if(response.status === 200){
        console.log(response.data);
        navigate("/", { replace: true });
      }
    });
    //navigate("/", { replace: true });
  }

  return (
    <div className="p-5 m-0 border-0 bd-example">
      <div className='text-center h2'>Register</div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input 
            type="text" 
            className="form-control" 
            aria-describedby="emailHelp"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        to="/"
        className="btn btn-warning mt-2"
      >
        Login
      </Link>

    </div>
  )
}

export default Reg