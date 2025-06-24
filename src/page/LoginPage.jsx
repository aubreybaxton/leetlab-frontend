import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { loginSchema } from './schema/Schema.jsx';
import { Mail, KeyRound, Loader2 } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore.js';



const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {login, isLoggingIn}= useAuthStore()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data) => {
    
    try {
      await login(data)
      console.log("login data",data)
    } catch (error) {
      console.log("login error", error)
    }
  }
  return (
    <>
      <div className="h-screen grid place-items-center w-full ">
      {/* <div className="absolute top-0 right-0 w-60 h-60 bg-accent opacity-20 blur-2xl rounded-full"></div>
    <div className="absolute bottom-0 left-0 w-80 h-40 bg-secondary opacity-25 blur-3xl rounded-full"></div> */}
    <div className="hidden dark:block absolute top-20 left-10 w-1/3 h-1/3 bg-primary opacity-20 blur-3xl rounded-full"></div>

        <div className='shadow-2xl shadow-indigo-400 rounded-4xl w-md'>

          <form onSubmit={handleSubmit(onSubmit)} className='bg-indigo-50 p-8 rounded-xl border-2 border-indigo-600'>
            <h3 className='text-2xl font-bold text-center text-black'> Login</h3>
            <hr className='my-4 text-black' />
            <br />
            <div className='form-control'>
              <label className="label">
                <span><Mail color="#7f36b0" strokeWidth={1.5} /></span>
                <span className='label-text text-black'> Email</span>
              </label>
              <input type="email"
                {...register("email")}
                className="input input-bordered w-full " placeholder="email@example.com" />
              {errors.email && <span className='text-red-500 block'>{"-->"}This field is required</span>}
            </div>
            <br />
            <div className='form-control'>
              <label className="label">
                <span><KeyRound color="#7f36b0" strokeWidth={1.5} /></span>
                <span className='label-text text-black'>Password</span>
              </label>
              <input type={showPassword?"text":"password"}
                {...register("password", { required: true })}
                className="input input-bordered w-full " placeholder="Password" />
              {errors.password && <span className='text-red-500 block'> {"-->"}This field is required</span>}
             
            </div>
            <label className='label mt-4 text-black'>
              <input type="checkbox"  
              onClick={() => setShowPassword(!showPassword)}
               className="checkbox checkbox-primary " />
                Show Password
              </label>

            <div className='form-control mt-4'>
              <button className="btn btn-primary mt-4 w-full transition-transform duration-200 hover:scale-105" 
              disabled={isLoggingIn}>
                {isLoggingIn?(<>
                <Loader2 className='h-5 w-5 animate-spin'/> Loading ....
                </>):("Login")}
              </button>
            </div>
            <p className="text-sm text-center text-black pt-2">
              Don't have an account?
              <Link to={"/signup"} className="text-blue-500 hover:underline">Register</Link>
            </p>

          </form>

        </div>
      </div>
    </>
  )
}

export default LoginPage