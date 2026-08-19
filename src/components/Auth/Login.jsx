import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    //two way binding
    console.log(handleLogin  )
    
    const [email,setEmail] = useState('')
        const [password,setPassword] = useState('')

    
    const SubmitHandler = (e) =>{ 
        e.preventDefault();
        handleLogin(email,password)
        console.log('the email is ', email)
        console.log('the password is ',   password)

    }
  return (
    <div> 
        ///
     <div className='flex h-screen w-screem items-center justify-center'> 
        <div className='border-2 rounded-xl border-emerald-600 p-20 '>
            <form onSubmit = {(e) =>{
                SubmitHandler(e)}} className='flex flex-col items-center justify-center'>
            <input 
            value = {email} onChange ={(e)=>{
                 setEmail(e.target.value)
            }} 
            required className = ' placeholder:text-gray-300  outline-none bg-transparent border-2 border-emerald-600 rounded-full px-5 py-3' type =  "email"  placeholder = "enter your email" />
            <input 
            value = {password}
            onChange = {(e) =>{ 
                setPassword(e.target.value)


            }}required className = ' placeholder:text-gray-300 outline-none bg-transparent border-2 border-emerald-600 rounded-full px-5 py-3 mt-3'type =  "password"  placeholder = "enter your password"  />
            <button className='border-none outline-none bg-emerald-600 text-xl text-white rounded-full px-21  py-3 mt-5'>Log In</button>
            </form>
        </div>
     </div>
    </div>
  )  
}

export default Login
 