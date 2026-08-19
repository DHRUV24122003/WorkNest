import React from 'react'

const TaskListNumbers = ({ data }) => {
  // Safety check
  if (!data) {
    return <div className="text-white mt-10">Loading...</div>
  }

  // Calculate counts from tasks array (safe way)
  const tasks = data.tasks || []

  const newTask = tasks.filter(t => t.newTask).length
  const completed = tasks.filter(t => t.completed).length
  const active = tasks.filter(t => t.active).length
  const failed = tasks.filter(t => t.failed).length

  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-400'>
        <h2 className='text-3xl font-bold'>{newTask}</h2>
        <h3 className='text-xl mt-0.5 font-medium'>New Task</h3>
      </div>

      <div className='rounded-xl w-[45%] py-6 px-9 bg-green-400'>
        <h2 className='text-3xl font-bold'>{completed}</h2>
        <h3 className='text-xl mt-0.5 font-medium'>Completed Task</h3>
      </div>

      <div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-400'>
        <h2 className='text-3xl text-black font-bold'>{active}</h2>
        <h3 className='text-xl mt-0.5 text-black font-medium'>Accepted Task</h3>
      </div>

      <div className='rounded-xl w-[45%] py-6 px-9 bg-red-400'>
        <h2 className='text-3xl font-bold'>{failed}</h2>
        <h3 className='text-xl mt-0.5 font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers