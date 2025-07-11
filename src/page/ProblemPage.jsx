import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Editor from "@monaco-editor/react";
import { Code } from "lucide-react";

import { useProblemStore } from "../store/useProblemStore.js";
import { getLanguageId } from "../libs/lang.js";
import { useExecutionStore } from "../store/useExecutionStore.js";
import { useSubmissionStore } from "../store/useSubmissionStore.js";
import SubmissionResult from "../components/Submission.jsx";
import SubmissionList from "../components/SubmissionList.jsx";




const ProblemPage = () => {
  const { id } = useParams();
  const { getProblemById, problem, isProblemLoading } = useProblemStore();
  const { getSubmissionCount, submissionCount, submissionByProblem, isLoading , getSubmissionByUserAndProblem} = useSubmissionStore();

  const [code, setCode] = useState("")
  // const [activeTab, setActiveTab] = useState("description");
  const [selectedLanguage, setSelectedLanguage] = useState("JAVASCRIPT");
  const [isBookmarked, SetIsBookmarked] = useState(false)
  const [testcases, setTestcases] = useState([]);

  const { submission, isExecuting, executeCode } = useExecutionStore()


  useEffect(() => {
    getProblemById(id)
    getSubmissionCount(id)
    getSubmissionByUserAndProblem(id)

  }, [id])

  useEffect(() => {
    if (problem) {
      setCode(problem.codeSnippets?.[selectedLanguage] || "---")
      setTestcases(
        problem.testcases.map((tc) => (
          {
            input: tc.input,
            output: tc.output
          }
        ))
      )
    }
  }, [problem, selectedLanguage])

  const handleLanguageChange = (e) => {
    const lang = e.target.value
    setSelectedLanguage(lang)
    setCode(problem.codeSnippets?.[lang] || "")
  }

  const handleRunCode = (e) => {
    e.preventDefault();

    try {
      const language_Id = getLanguageId(selectedLanguage);
      const stdin = problem.testcases.map((tc) => tc.input)
      const expected_outputs = problem.testcases.map((tc) => tc.output);
      console.log("outputs", problem.testcases.map((tc) => tc.output))
      executeCode(code, language_Id, stdin, expected_outputs, id)

    } catch (error) {
      console.log("error", error)
    }
  }


  return (
    <>

      <div className="border rounded-2xl border-indigo-600 m-4 p-4 shadow-2xl font-mono">
        <div className="text-2xl flex items-center ">
          <div> <Code /> </div>
          <div> {problem?.title} </div>
          <div className="ml-auto">

            <select className="select select-info" value={selectedLanguage} onChange={handleLanguageChange}>
              // object.keys return a key of the object in array---
              {Object.keys(problem?.codeSnippets || {}).map((lang) => (
                <option key={lang} value={lang}>{lang.charAt(0).toUpperCase() + lang.slice(1)}</option>
              ))}

            </select>
          </div>
        </div>
        <hr className="my-2" />
        <div className="flex bg-base-300 m-4 p-4 rounded-2xl">
          <div className="px-4">Updated :{problem&& new Date(problem.updatedAt).toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
          </div>
          <div className="px-4"> Submissions : {submissionCount}</div>
        </div>
        <div className="grid grid-cols-2 gap-2 p-4">
          <div className="tabs tabs-box rounded-2xl">
            <input type="radio" name="my_tabs_3" className="tab rounded-2xl" aria-label="Description" defaultChecked />
            <div className="tab-content bg-base-100 border-base-300 p-6 rounded-2xl">
              <div className="text-lg"> {"->"} {problem?.description}</div>
              <br />

              <div className="shadow-2xl p-4 bg-base-200 rounded-xl m-3">
                <div className=" bg-base-300 p-2 rounded-xl">
                  <div>
                    Difficulty : <div className="badge badge-soft badge-primary"> {problem?.difficulty}</div>
                  </div>
                  <div>
                    Tags : {problem?.tags.map((tag) => (
                      <div key={tag} className="badge badge-outline badge-info m-2">{tag}</div>
                    ))}
                  </div>

                </div>

              </div>
              {/* Examples */}
              <div className="shadow-2xl bg-base-200 p-4 rounded-xl m-3">
                <div>Examples </div>
                <hr className="m-2" />

                {problem?.examples && Object.entries(problem.examples).map(([lang, example]) => (
                  <div key={lang} className="bg-base-300 p-6 rounded-xl mb-6 font-mono">

                    <div className="mb-4 ">
                      <div className="text-indigo-300 mb-2 font-semibold">Input:</div>
                      <span className="bg-black/90 px-4 py-1 rounded-lg text-white">
                        {example.input}
                      </span>
                    </div>

                    <div className="mb-4">
                      <div className="text-indigo-300 mb-2 font-semibold">Output:</div>
                      <span className="bg-black/90 px-4 py-1 rounded-lg text-white">
                        {example.output}
                      </span>
                    </div>

                    {example.explanation && (
                      <div>
                        <div className="text-emerald-300 mb-2 font-semibold">Explanation:</div>
                        <p className="text-base-content/70">{example.explanation}</p>
                      </div>
                    )}
                  </div>

                ))}</div>
              <div className="shadow-2xl bg-base-200 p-4 rounded-xl m-3">
                <div className="bg-base-300 p-4 rounded-xl">
                  <div className="text-indigo-300 mb-2 font-semibold">Constraints:</div>
                  <span className="px-4 py-1 rounded-lg">
                    {problem?.constraints}
                  </span>

                </div>
              </div>

            </div>
            <input type="radio" name="my_tabs_3" className="tab " aria-label="Hints" />
            <div className="tab-content bg-base-100 border-base-300 p-6">{problem?.hints}</div>
            <input type="radio" name="my_tabs_3" className="tab" aria-label="Submissions" />
            <div className="tab-content bg-base-100 border-base-300 p-6"><SubmissionList submissionByProblem={submissionByProblem} /></div>
            <input type="radio" name="my_tabs_3" className="tab" aria-label="Description" />
            <div className="tab-content bg-base-100 border-base-300 p-6">{problem?.description}</div>
          </div>
          <div className=" shadow-2xl rounded-2xl overflow-hidden">
            <Editor
              className="rounded-2xl overflow-hidden "
              lineDe
              height="550px"
              theme="vs-dark"
              defaultLanguage="javascript"
              defaultValue={code}
              language={selectedLanguage}
              value={code}
              onChange={(val) => setCode(val || "")}
              options={{
                padding: {
                  top: 20,
                  bottom: 10
                },
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: "on",
                roundedSelection: false,
                scrollBeyondLastLine: false,
                automaticLayout: true,
              }}
            />
            <div className="flex justify-between m-4">
              <button className="btn btn-secondary" onClick={handleRunCode} disabled={isExecuting}> Run </button>
              <button className="btn btn-success"> Submit </button>
            </div>
            {/*  Submisstion */}

            <div>
              {submission && <SubmissionResult submission={submission} />}
            </div>
          </div>

        </div>
        <div className="bg-base-200 border-base-300 p-4 m-4 rounded-2xl">
          <h3 className="text-center text-accent">Test Cases</h3>
          <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-300">
            <table className="table text-center">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Input</th>
                  <th>Expected Output</th>

                </tr>
              </thead>
              <tbody>
                {testcases.map((tc, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{tc.input}</td>
                    <td>{tc.output}</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </>
  )

};

export default ProblemPage;
