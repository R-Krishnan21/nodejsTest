import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import Dash from './components/Dash';
import Login from './components/Login';
import Reg from './components/Reg';


function App() {
  const isLogin = useSelector((state) => state.user.isLogin)
  console.log(isLogin)
  return (
    <BrowserRouter>
      {isLogin ? 
        <Routes>
          <Route exact path="/" element={<Dash/>}/>
        </Routes>
      :
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/reg" element={<Reg />} />
        </Routes>
      }
    </BrowserRouter>
  )
}

export default App