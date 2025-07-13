import React, { useEffect, useMemo } from 'react';
import { useAuthStore } from '../store/useAuthStore.js';
import {useSubmissionStore} from '../store/useSubmissionStore.js';


function Profile() {
  const { authUser } = useAuthStore();

  const {allSubmissions, getAllSubmissionsByUser} = useSubmissionStore();

  useEffect(()=>{
    getAllSubmissionsByUser()
  },[])

  console.log("All submission== profile page", allSubmissions)

  function capitalizeName(name) {
    if (!name) return '';
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }
  const date= new Date();
  const generateActivity = useMemo(() => {
    
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thrusday",
      "Friday",
      "Saturday",
    ];
    const pDay= days[date.getDay()];
    const pMonth= months[date.getMonth()]
    console.log("day and Month", pDay,pMonth)

  }, [])


  return (
    <>

      <div className='grid grid-cols-4 p-4 place-items-center' >
        {/* //profile card */}
        <div className="card bg-base-100 shadow-2xl m-4 row-span-2 border border-blue-500 rounded-2xl" data-aos="zoom-in-right">
          <div className="card-body ">
            <h2 className="card-title  ">
              <img
                alt="user image"
                className='rounded-4xl'
                src={authUser?.image || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
            </h2>
            <p className='text-2xl text-center'> {capitalizeName(authUser?.name)}</p>
            <p className='text-lg'> Email : {authUser?.email}</p>
            <p className='text-lg'> Role : {capitalizeName(authUser?.role)}</p>

            <div className="card-actions justify-end">
              <button className="btn btn-success rounded-2xl">Show Activity</button>
            </div>
          </div>
        </div>
        {/* Profile page stats */}
        <div className='grid grid-cols-3 col-span-3 gap-6' data-aos="zoom-in-left">
          <div className="card card-md shadow-2xl rounded-2xl bg-blue-400">
            <div className="card-body">
              <h2 className="card-title">Easy</h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

            </div>
          </div>

          <div className="card card-md shadow-2xl rounded-2xl bg-teal-400">
            <div className="card-body">
              <h2 className="card-title text-center">Medium </h2>
              <p></p>
            </div>
          </div>

          <div className="card card-md shadow-2xl rounded-2xl bg-amber-400">
            <div className="card-body text-center">
              <h2 className="card-title">Hard</h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

            </div>
          </div>

        </div>
        <div className='grid  col-span-3 gap-6 shadow-2xl rounded-2xl border border-blue-500'>
          <div className='p-4 text-center grid-rows-7'>
            <h3 className=' text-lg font-bold'> Activity</h3>
            <button className='btn btn-info'>{date.getFullYear()}</button>
            <div className='divider'></div>
            <div className='grid grid-cols-4 gap-1'>
              <div className='w-6 h-6 border-2 rounded-lg'></div>
              <div className='w-6 h-6 border-2 rounded-lg'></div>
              <div className='w-6 h-6 border-2 rounded-lg'></div>
              <div className='w-6 h-6 border-2 rounded-lg'></div>
              <div className='w-6 h-6 border-2 rounded-lg'></div>
              <div className='w-6 h-6 border-2 rounded-lg'></div>
              <div className='w-6 h-6 border-2 rounded-lg'></div>
              <div className='w-6 h-6 border-2 rounded-lg'></div>
              <div className='w-6 h-6 border-2 rounded-lg'></div>
              <div className='w-6 h-6 border-2 rounded-lg'></div>
              <div className='w-6 h-6 border-2 rounded-lg'></div>
              <div className='w-6 h-6 border-2 rounded-lg'></div>
              <div className='w-6 h-6 border-2 rounded-lg'></div>
              <div className='w-6 h-6 border-2 rounded-lg'></div>
            </div>
          </div>


        </div>

      </div>
    </>

  )
}

export default Profile;