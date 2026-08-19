import React, { useContext } from 'react'
// import { AuthContext } from '../../context/AuthProvider'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {
  const [userData] = useContext(AuthContext)

  if (!userData) {
    return <div className="text-white p-5">Loading...</div>
  }

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
      {/* Header */}
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5'>New Task</h3>
        <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5'>Completed</h5>
        <h5 className='text-lg font-medium w-1/5'>Failed</h5>
      </div>

      {/* Employee Rows */}
      <div>
        {userData.map((elem, idx) => {
          // Calculate counts safely from tasks array
          const tasks = elem.tasks || []

          const newTask = tasks.filter(t => t.newTask).length
          const active = tasks.filter(t => t.active).length
          const completed = tasks.filter(t => t.completed).length
          const failed = tasks.filter(t => t.failed).length

          return (
            <div
              key={idx}
              className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'
            >
              <h2 className='text-lg font-medium w-1/5'>
                {elem.firstName || elem.email || "Employee"}
              </h2>
              <h3 className='text-lg font-medium w-1/5 text-blue-400'>{newTask}</h3>
              <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{active}</h5>
              <h5 className='text-lg font-medium w-1/5 text-white'>{completed}</h5>
              <h5 className='text-lg font-medium w-1/5 text-red-600'>{failed}</h5>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllTask