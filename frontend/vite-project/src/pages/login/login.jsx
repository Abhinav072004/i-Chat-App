import React from 'react'

const login = () => {
  return (
    <div className ='flex flex-col items-center justify-center min-w-96 mx-auto' >
        
<div
className="h-full w-full bg-blue-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100">





            <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
           <span className='text-blue-500'>
            ChatApp</span>         
            </h1>
            <form>
                <div>
                    <label className='label p-2'>
                        <span className = 'text-base label-text'>Username</span>
                    </label>
                    <input className='w-full input input-bordered h-10' type='text' placeholder='Enter username'/>
                </div>
            </form>

        </div>
    </div>
  )
}

export default login