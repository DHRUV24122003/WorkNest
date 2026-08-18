import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import Header from './others/Header'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import AuthContext from './context/AuthContext'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'



const App = () => {

  useEffect(( ) =>{
    setLocalStorage()
    getLocalStorage()
  })
  return (
    <div>
     
      <Login/>
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/>   */}
      {/* <AuthContext/> */}
      
    </div> 
  )
}

export default App
