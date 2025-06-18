import React from 'react';
import { useProblemStore } from '../store/useProblemStore';
import { PencilLine, Trash2, FilePlus, BookmarkPlus, Ellipsis } from "lucide-react"

function ProblemList() {
  const { problems } = useProblemStore();
  return (
    <div className=' flex flex-col justify-center border border-blue-600 mx-24 p-4 rounded-4xl shadow-xl/30 shadow-blue-500/50  mb-8'>
      <h2 className='text-center text-2xl'> Problems</h2>
      
      <div className="divider"></div>
      <div className='flex relative'>
        <fieldset className="fieldset mx-4 ml-4 w-48">
          <legend className="fieldset-legend text-lg">Select All</legend>
          <input type="checkbox" className="checkbox checkbox-secondary" />
        </fieldset>
        <fieldset className="fieldset mx-4 w-48">
          <legend className="fieldset-legend text-lg">Search by Title</legend>
          <input type="text" className="input" placeholder="My awesome page" />
        </fieldset>
        <fieldset className="fieldset mx-4 w-48">
          <legend className="fieldset-legend text-lg">Difficulty</legend>
          <select defaultValue="Pick a browser" className="select">
            <option disabled={true}>type</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </fieldset>
        <fieldset className="fieldset mx-4 w-48">
          <legend className="fieldset-legend text-lg">Tag</legend>
          <select defaultValue="Pick a browser" className="select">
            <option disabled={true}>Filter by Tag</option>
            <option>Chrome</option>
            <option>FireFox</option>
            <option>Safari</option>
          </select>
        </fieldset>
        <button className=' absolute top-0 right-0 btn btn-secondary'><FilePlus /> Create Playlist</button>
      </div>
      <div className="divider"></div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead >
            <tr className='bg-gray-500'>
              <th className="rounded-tl-lg">
                <label>
                  {/* <input type="checkbox" className="checkbox" /> */}
                </label>
              </th>
              <th>Title</th>
              <th>Difficulty</th>
              <th>Tag</th>
              <th className="rounded-tr-lg"> Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {problems.map((problem) => (
              <tr key={problem.id} className='transition delay-150 duration-300 ease-in-out hover:scale-102 hover:bg-base-300'>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox ml-4" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{problem.title}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className='badge badge-soft badge-secondary'>{problem.difficulty}</div>
                </td>
                <td>
                  {problem.tags.map((tag) => (
                    <div className='badge badge-outline badge-primary m-0.5' key={tag}>{tag}</div>
                  ))}
                </td>
                <th>
                  <button className='btn mr-4 hover:bg-blue-800' ><PencilLine /></button>
                  <button className='btn mr-4 hover:bg-red-500'> <Trash2 /></button>
                  <button className='btn mr-4 hover:bg-success'> <BookmarkPlus /></button>
                  <button className='btn mr-4 hover:bg-error'> <Ellipsis /></button>
                </th>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default ProblemList