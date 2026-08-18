import React from 'react'

const TaskListNumbers = () => {
  return ( 
    <div>
      <div className='flex  mt-10 justufy-between gap-2 screen'>

        <div className=' rounded-xl w-[45%] px-9 py-6 bg-blue-400  '>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className = 'text-xl font-medium '>new task</h3>
        </div>

         <div className=' rounded-xl w-[45%] px-9 py-6 bg-green-400  '>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className = 'text-xl font-medium '>new task</h3>
        </div>

         <div className=' rounded-xl w-[45%] px-9 py-6 bg-red-400  '>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className = 'text-xl font-medium '>new task</h3>
        </div>

        <div className=' rounded-xl w-[45%] px-9 py-6 bg-orange-400  '>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className = 'text-xl font-medium '>new task</h3>
        </div>


      </div>
    </div>
  )
}

export default TaskListNumbers
