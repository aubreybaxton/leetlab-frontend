import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { Mail, KeyRound, User, Loader2 } from 'lucide-react'

import { signupSchema } from './schema/Schema.jsx';
import { useAuthStore } from '../store/useAuthStore.js';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signup, isSignUp } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema)
  })

  const onSubmit = async (data) => {
    console.log(data)
    try {
      await signup(data);
      console.log("signup data", data)
    } catch (error) {
      console.log("Sign Up Failed", error)
    }
  }
  return (
    <>
      <div className="h-screen grid place-items-center w-fullbg-gray-900 text-white " data-aos="zoom-in-down">
      <div className="hidden dark:block absolute top-20 left-10 w-1/3 h-1/3 bg-primary opacity-20 blur-3xl rounded-full"></div>
        <div className='shadow-2xl shadow-indigo-400 rounded-4xl w-md'>

          <form onSubmit={handleSubmit(onSubmit)} className='bg-indigo-100  text-base-content p-8 rounded-xl border-2 border-indigo-600'>
            <h3 className='text-2xl font-bold text-center text-black'> Signup</h3>
            <hr className='my-4 text-black' />
            <div className='form-control'>
              <label className="label">
                <span><User color="#7f36b0" strokeWidth={1.5} /></span>
                <span className='label-text text-black'> Name</span>

              </label>
              <input type="text"  {...register("name", { required: true })} className="input input-bordered w-full " placeholder="enter name" />
              {errors.name && <span className='text-red-500'>{"-->"} This is required.....</span>}
            </div>
            <br />
            <div className='form-control'>
              <label className="label">
                <span><Mail color="#7f36b0" strokeWidth={1.5} /></span>
                <span className='label-text text-black'> Email</span>
              </label>
              <div className='input-group'>
                {/* <span><Mail /></span> */}
                <input type="email" {...register("email", { required: true })} className="input input-bordered w-full " placeholder="email@example.com" />
                {errors.email && <span className='text-red-500'>{"-->"} This is required.....</span>}
              </div>
            </div>

            <br />
            <div className='form-control relative'>
              <label className="label">
                <KeyRound color="#7f36b0" strokeWidth={1.5} />
                <span className='label-text text-black'>Password</span>
              </label>
              <input type={showPassword ? "text" : "password"} {...register("password", { required: true })} className="input input-bordered w-full " placeholder="Password" />
              {errors.password && <span className='text-red-500'>{"-->"} This is required.....</span>}

            </div>
            <label className='label mt-4 text-black'>
                <input type="checkbox"
                  onClick={() => setShowPassword(!showPassword)}
                  className="checkbox checkbox-primary " />
                Show Password
              </label>

            <div className='form-control mt-4'>
              <button className="btn btn-primary mt-4 w-full transition-transform duration-200 hover:scale-105"
                disabled={isSignUp}>
                {isSignUp ? (<>
                  <Loader2 className='h-5 w-5 animate-spin'/>Loading ....
                </>) : ("Sign Up")}
              </button>
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