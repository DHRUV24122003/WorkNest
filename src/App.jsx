import React, { useEffect, useState , useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import Header from './others/Header'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import AuthProvider from './context/AuthProvider'
import { AuthContext } from './context/AuthProvider'



const App = () => {

  // useEffect(( ) =>{
  //   setLocalStorage()
  //   getLocalStorage()
  // })


  const[user,setUser] = useState(null)
  const authData = useContext(AuthContext)
  console.log(authData.employees) 

  const handleLogin = (email,password) => {
    if (email == "admin@me.com" && password == "123"){
      setUser('admin')
      console.log(user)
    }
    else if(email == 'user@me.com' && password ==  '123'){
      setUser('employee')
      console.log(user)
    
    }
    else {
      alert('Invalid Credentials')
    }

  }

  
  const data = useContext(AuthContext)
  
  return (


     <>
     {!user ? <Login handleLogin = {handleLogin}/>: ''}
     {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
    
    </>
   
  )
}

export default App
