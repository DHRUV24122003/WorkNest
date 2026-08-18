import React from 'react'

const CreateTask = () => {
  return (
    <div>
      <form >
      <div className='mt-8 flex w-full bg-[#1c1c1c] rounded-2xl p-8 border border-[#2a2a2a] gap-10'>
        
        {/* Left Side */}
        <div className='w-1/2 space-y-5'>
          
          <div>
            <h3 className='text-sm text-gray-300 mb-2'>Task Title</h3>
            <input 
              type='text' 
              placeholder='Make a UI design'
              className='w-full bg-transparent border border-[#3a3a3a] rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-gray-500'
            />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-2'>Date</h3>
            <input 
              type='date'
              className='w-full bg-transparent border border-[#3a3a3a] rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-gray-500'
            />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-2'>Assign to</h3>
            <input 
              type='text' 
              placeholder='employee name'
              className='w-full bg-transparent border border-[#3a3a3a] rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-gray-500'
            />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-2'>Category</h3>
            <input 
              type='text' 
              placeholder='design, dev, etc'
              className='w-full bg-transparent border border-[#3a3a3a] rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-gray-500'
            />
          </div>

        </div>

        {/* Right Side */}
        <div className='w-1/2 flex flex-col'>
          <div className='flex-1'>
            <h3 className='text-sm text-gray-300 mb-2'>Description</h3>
            <textarea 
              className='w-full h-48 bg-transparent border border-[#3a3a3a] rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-gray-500 resize-none'
            ></textarea>
          </div>

          <button className='mt-5 bg-[#4ade80] hover:bg-[#22c55e] text-black font-medium py-3 rounded-lg transition'>
            Create Task
          </button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default CreateTask
