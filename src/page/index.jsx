import React from 'react';
import { Link } from 'react-router-dom';
import ToggleTheme from './ToggleTheme.jsx';
import { VscGithub } from "react-icons/vsc";
import { FaGitlab } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";





function Index() {
  return (
    <>
      <div className='w-full px-4 pt-2 sticky top-0 z-10 '>
        <div className="navbar  bg-primary text-primary-content shadow-lg rounded-2xl">
          <div className="flex-1">
            <Link className="mx-2 text-xl" to={"/index"}> CodeLab </Link>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end pr-4">
              <Link to={'/login'}><button className='btn btn-accent rounded-lg'>Login</button></Link></div>
            <div className="dropdown dropdown-end pr-4">
              <Link to={'/signup'}><button className='btn btn-secondary rounded-lg'>SignUp</button></Link></div>
            <div className="dropdown dropdown-end pr-4"><ToggleTheme /></div>

          </div>
        </div>
      </div>
      {/* Hero Section */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <img src={'/images/bgleetlab.png'} alt='leetlab' className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-4xl font-bold pb-4" data-aos="zoom-in"> <strong className='text-indigo-600 tooltip tooltip-top hover:animate-bounce bg-accent rounded-2xl p-4' data-tip="CodeLab is the Love for the Developers"
            >{"<"} CodeLab {">"} </strong></h1>
            <p className='text-xl pb-4' data-aos="zoom-in-up">Platform designed to provide the <strong>Best-In-Class feature</strong> and <strong> Best Coding Practices</strong> to improve the Knowledge and User Experience.</p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
      {/*  Features Sections */}
      <div className='bg-base-300 min-h-screen'>
        <div className='text-center text-2xl p-4'> Features</div>
        <div className='divider'></div>
        <div className='grid grid-cols-3  place-items-center min-w-96'>
          {/* Card 1 */}
          <div className="card bg-base-100 shadow-2xl m-4 row-span-2 
              border-2 border-blue-500 rounded-4xl transition-all
              min-w-md min-h-80
               duration-300 hover:scale-105" data-aos="zoom-in-right">
            <div className="card-body ">
              <h2 className="card-title justify-center ">Languages Support</h2>
              <div className='divider m-2'></div>
              <div className='text-lg pl-2' >
                <ul className="list-disc pl-5">
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>Java</li>
                </ul>

              </div>
              <div className='divider'> Upcoming support</div>
              <div className="font-mono pl-4">
                <ul className="list-disc pl-5">
                  <li>C</li>
                  <li>C++</li>
                </ul>

              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card bg-base-100 shadow-2xl m-4 row-span-2 
              border-2 border-blue-500 rounded-4xl min-w-md min-h-80
              transition-all duration-300 ease-in-out hover:scale-105" data-aos="zoom-in-right">
            <div className="card-body ">
              <h2 className="card-title justify-center ">Track Progress</h2>
              <div className='divider m-2'></div>
              <div className='text-lg pl-2' >
                <ul className="list-disc pl-5">
                  <li>Daily Check-In</li>
                  <li>Get Badges and Rankings</li>
                  <li>Check Solved Problem</li>
                </ul>
              </div>

            </div>
          </div>
          {/* Card 3 */}
          <div className="card bg-base-100 shadow-2xl m-4 row-span-2 
              border-2 border-blue-500 rounded-4xl transition-all
              min-w-md min-h-80
               duration-300 hover:scale-105" data-aos="zoom-in-left">
            <div className="card-body ">
              <h2 className="card-title  justify-center"> Contest</h2>
              <div className='divider m-2'></div>
              <div className='text-lg pl-2' >
                <ul className="list-disc pl-5">
                  <li>Participate in Contest</li>
                  <li>Get Certificates </li>
                  <li>To Meet the People</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Card 4 */}
          <div className="card bg-base-100 shadow-2xl m-4 row-span-2 
              border-2 border-blue-500 rounded-4xl transition-transform
              min-w-md min-h-80
               duration-200 hover:scale-105" data-aos="zoom-in-right">
            <div className="card-body ">
              <h2 className="card-title  justify-center"> Contest</h2>
              <div className='divider m-2'></div>
              <div className='text-lg pl-2' >
                <ul className="list-disc pl-5">
                  <li>Participate in Contest</li>
                  <li>Get Certificates </li>
                  <li>To Meet the People</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Card 5 */}
          <div className="card bg-base-100 shadow-2xl m-4 row-span-2 
              border-2 border-blue-500 rounded-4xl transition-transform
              min-w-md min-h-80
               duration-200 hover:scale-105" data-aos="zoom-in-up">
            <div className="card-body ">
              <h2 className="card-title  justify-center"> Contest</h2>
              <div className='divider m-2'></div>
              <div className='text-lg pl-2' >
                <ul className="list-disc pl-5">
                  <li>Participate in Contest</li>
                  <li>Get Certificates </li>
                  <li>To Meet the People</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Card 6 */}
          <div className="card bg-base-100 shadow-2xl m-4 row-span-2 
              border-2 border-blue-500 rounded-4xl transition-transform
              min-w-md min-h-80
               duration-200 hover:scale-105" data-aos="zoom-in-left">
            <div className="card-body ">
              <h2 className="card-title  justify-center"> Contest</h2>
              <div className='divider m-2'></div>
              <div className='text-lg pl-2' >
                <ul className="list-disc pl-5">
                  <li>Participate in Contest</li>
                  <li>Get Certificates </li>
                  <li>To Meet the People</li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Dashboard */}
      <div className='bg-base-200 min-h-screen'>
        <div className="mockup-browser m-16 rounded-4xl bg-base-100 p-4 shadow-2xl" data-aos='zoom-in'>
          <div className="mockup-browser-toolbar bg-base-300 rounded-2xl p-4">
            <div className="input">https://leetlab.com</div>
          </div>
          <div className="grid place-content-center h-160 mt-20">
            <img src={'/images/bgleetlab.png'} alt='leetlab' className='rounded-2xl' />
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="footer footer-horizontal footer-center bg-indigo-500 text-primary-content p-10">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="inline-block fill-current">
            <path
              d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p className="font-bold">

            <br />
            Providing reliable tech since 1992
          </p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href='https://github.com/aubreybaxton'>
              <VscGithub size={24} />
            </a>
            <a href='https://gitlab.com/AubreyBaxton'>
             <FaGitlab size={24} />
            </a>
            <a href='#'>
              <CiLinkedin size={24} />
            </a>
          </div>
        </nav>
      </footer>
    </>

  )
}

export default Index