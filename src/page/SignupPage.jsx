import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import {Mail, EyeOff, Eye, KeyRound, User} from 'lucide-react'

import { signupSchema } from './schema/Schema.jsx';

const SignupPage = () => {
  const [showPassword , setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema)
  })

  const onSubmit = async (data) => {
    console.log(data)
  }
  return (
    <>
      <div className="h-screen grid place-items-center w-full ">
        <div className='shadow-2xl shadow-indigo-400 rounded-4xl w-md'>

          <form onSubmit={handleSubmit(onSubmit)} className='bg-indigo-50 p-8 rounded-xl border-2 border-indigo-600'>
            <h3 className='text-2xl font-bold text-center text-black'> Signup</h3>
            <hr className='my-4 text-black' />
            <div className='form-control'>
              <label className="label">
                <span><User /></span>
                <span className='label-text text-black'> Name</span>
              </label>
              <input type="text" className="input input-bordered w-full " placeholder="enter name" />
            </div>
            <br />
            <div className='form-control'>
              <label className="label">
              <span><Mail /></span>
                <span className='label-text text-black'> Email</span>
              </label>
             <div className='input-group'>
             {/* <span><Mail /></span> */}
             <input type="email" className="input input-bordered w-full " placeholder="email@example.com" />
             </div>
            </div>

            <br />
            <div className='form-control relative'>
              <label className="label">
              <KeyRound />
                <span className='label-text text-black'>Password</span>
              </label>
              <input type="password" className="input input-bordered w-full " placeholder="Password" />
              <button
                  type="button"
                  className="absolute inset-y-0 right-3  top-1/2 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-base-content/40" />
                  ) : (
                    <Eye className="h-5 w-5 text-base-content/40" />
                  )}
                </button>
            </div>

            <div className='form-control mt-4'>
              <button className="btn btn-primary mt-4 w-full">Signup</button>
            </div>

            <p className="text-sm text-center text-black pt-2">
             Go Back to Login?
              <Link to={"/login"} className="text-blue-500 hover:underline">Login</Link>
            </p>

          </form>

        </div>
      </div>
    </>
  )
}

export default SignupPage