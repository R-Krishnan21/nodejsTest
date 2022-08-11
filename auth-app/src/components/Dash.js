import React from 'react'
import AuthHandler from './Auth'
import { useSelector, useDispatch } from 'react-redux'
import {logout} from "../redux/userSlice"

function Dash() {
  const dispatch = useDispatch()

  const handleSubmit = () => {
    console.log("handleSubmit")
    dispatch(logout())
  }
  return (
    <div>
      <div className='h1 text-center'> Dash </div>
      <form className="text-center" onSubmit={handleSubmit} >
        <button 
          type="submit" 
          className="btn btn-primary"
        >
            Logout
        </button>
      </form>
    </div>
  )
}

export default Dash