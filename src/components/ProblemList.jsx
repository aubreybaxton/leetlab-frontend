import React, { useMemo, useState } from 'react';
import { useProblemStore } from '../store/useProblemStore.js';
import { PencilLine, Trash2, FilePlus, BookmarkPlus, Ellipsis } from "lucide-react"

function ProblemList() {
  const { problems } = useProblemStore();

  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("ALL");
  const [selectedTag, setSelectedTag] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);

  const difficultyLevel = ["EASY", "MEDIUM", "HARD"]

  const allTags = useMemo(() => {
    if (!Array.isArray(problems)) return [];
    const tags = new Set();

    problems.forEach((p) => (p.tags?.forEach((t) => (tags.add(t)))))
    return Array.from(tags);
  }, [problems])
  console.log("tags", allTags)

  return (
    <div className=' flex flex-col justify-center border border-blue-600 mx-24 p-4 rounded-4xl shadow-xl/30 shadow-blue-500/50  mb-8'>
      <h2 className='text-center text-2xl'> Problems</h2>

      <div className="divider"></div>
      <div className='flex relative'>
        {/* <fieldset className="fieldset mx-4 ml-4 w-48">
          <legend className="fieldset-legend text-lg">Select All</legend>
          <input type="checkbox" className="checkbox checkbox-secondary" />
        </fieldset> */}
        <fieldset className="fieldset mx-4 w-48">
          <legend className="fieldset-legend text-lg">Search by Title</legend>
          <input type="text" className="input" placeholder="Search..." value={search}
            onChange={(e) => setSearch(e.target.value)} />
        </fieldset>
        <fieldset className="fieldset mx-4 w-48">
          <legend className="fieldset-legend text-lg">Difficulty</legend>
          <select className="select"
            value={difficulty}
            onChange={(e) => (setDifficulty(e.target.value))}>
            <option value="ALL">ALL</option>
            {difficultyLevel.map((level)=>(
                <option value={level}>{level}</option>
            ))}
            
          </select>
        </fieldset>
        <fieldset className="fieldset mx-4 w-48">
          <legend className="fieldset-legend text-lg">Tag</legend>
          <select
            className="select"
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
          >
            <option value="ALL" > ALL </option>
            {allTags.map((tag) => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
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

                  <div className="tooltip">
                    <div className="tooltip-content">
                      <div className=" text-orange-400 text-md font-black"> Edit </div>
                    </div>
                    <button className='btn mr-4 p-3 rounded-lg hover:bg-blue-800 hover:animate-bounce' ><PencilLine /></button>
                  </div>
                  <div className="tooltip">
                    <div className="tooltip-content">
                      <div className=" text-red-400 text-md font-black"> Delete </div>
                    </div>
                    <button className='btn mr-4 p-3 rounded-lg hover:bg-red-500 hover:animate-bounce'> <Trash2 /></button>
                  </div>
                  <div className="tooltip">
                    <div className="tooltip-content">
                      <div className=" text-success text-md font-black"> Add to Playlist </div>
                    </div>
                    <button className='btn mr-4 p-3 rounded-lg hover:bg-success hover:animate-bounce'> <BookmarkPlus /></button>
                  </div>
                  <div className="tooltip">
                    <div className="tooltip-content">
                      <div className=" text-orange-400 text-md font-black"> Actions </div>
                    </div>
                    <button className='btn mr-4 p-3 rounded-lg hover:bg-error hover:animate-bounce'> <Ellipsis /></button>
                  </div>




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