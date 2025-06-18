import React, { useEffect } from 'react';
import { useProblemStore } from '../store/useProblemStore.js';
import { Loader } from 'lucide-react';
import ProblemList from '../components/ProblemList.jsx';

const HomePage = () => {
  const { getAllProblems, problems, isProblemsLoading } = useProblemStore();

  useEffect(() => {
    getAllProblems()
  }, [getAllProblems])
  console.log("problems", problems)

  if (isProblemsLoading) {
    return (
      <div>
        <Loader className='size-10 text-center animate-spin' />
      </div>
    )
  }
  return (
    <>
      <div className="absolute top-16 left-0 w-1/3 h-1/3 bg-primary opacity-30 blur-3xl rounded-md bottom-9"></div>
      <div className='text-center mt-12'>
        <h2 className='text-4xl'> Welcome to the <strong className='text-indigo-600 tooltip tooltip-top' data-tip="CodeLab is the Love for the Developers">{"<"} CodeLab {">"} </strong></h2>
        <br />
        <p className='text-xl'>Platform is Inspired by LeetCode, and designed to provide the <strong>Best-In-Class feature</strong> and <strong> Best Coding Practices</strong> to improve the Knowledge and User Experience.</p>
      </div>
      <br/>
      {problems.length > 0 ? <ProblemList/> : <div>No Problem found</div>}
    </>
  )
}

export default HomePage