import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import Header from './others/Header'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import AuthContext from './context/AuthContext'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'



const App = () => {

  // useEffect(( ) =>{
  //   setLocalStorage()
  //   getLocalStorage()
  // })

  const[user,setUser] = useState(null)

  const handleLogin = (email,password) => {
    if (email == " " && password == "123"){
      console.log("this is admin")
    }
    else{
      alert("Invalid credentials")
    
    }

  }

  
  
  
  return (
    <div>
      {/* if user is not there then log in or if it is there , put it blank */}
       {!user? <Login  handleLogin = {handleLogin} /> : ' '}
      
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/>   */}
      {/* <AuthContext/> */}
      
    </div> 
  )
}

export default App
