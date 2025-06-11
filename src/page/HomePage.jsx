import React from 'react'

const HomePage = () => {
  return (
    <>
      <div className="absolute top-16 left-0 w-1/3 h-1/3 bg-primary opacity-30 blur-3xl rounded-md bottom-9"></div>
      <div className='text-center mt-12'>
        <h2 className='text-4xl'> Welcome to the <strong className='text-indigo-600 tooltip tooltip-top' data-tip="CodeLab is the Love for the Developers">{"<"} CodeLab {">"} </strong></h2>
        <br/>
        <p className='text-xl'>Platform is Inspired by LeetCode, and designed to provide the <strong>Best-In-Class feature</strong> and <strong> Best Coding Practices</strong> to improve the Knowledge and User Experience.</p>
      </div>

    </>
  )
}

export default HomePage