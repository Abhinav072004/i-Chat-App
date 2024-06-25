import GenderCheckbox from "./GenderCheckbox"


const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 max-auto'>
        <div className='w-full p-6 rounded-md shadow-md bg-gray-400 bg-clip-padding bakdrop-blur-lg bg-opacity-0 '>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Sign Up <span className='text-blue-500'>ChatApp
            
                </span>
            </h1>
            <div>
                <label className = 'label p-2'>
                    <span className='text-base label-text '>Full Name</span>
                </label>
                <input className='w-full input input-bordered h-10' type='text' placeholder='John Adam'/>
            </div>

        <div> 
            <label className='label p-2'>
            <span className='text-base label-text'>Username</span>
            </label>
            <input
            type='text'
            placeholder="username"
            className='w-full input input-bordered h-10'
            />
            </div>

        <div>
            <label className='label'>
            <span className='text-base label-text'>Password</span>
            </label>
            <input
            type='text'
            placeholder='Enter Password'
            className='w-full input input-bordered h-10'
            />
            </div> 
        <div >
            <label className='label'>
            <span className='text-base label-text'>Confirm Password</span>    

            </label>
            <input 
            type='password'
            placeholder='Confirm Password'
            className='w-full input input-bordered h-10'
            >
            </input>
            </div> 


        <a  className='text-sm hover:underline hover:text-blue--600 mt-4 inline-block' href='#'>Already have an account?
            </a>  
        <GenderCheckbox/>
        <div>
        <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign Up</button>
            </div>               
        </div>

    </div>
  )
}

export default SignUp