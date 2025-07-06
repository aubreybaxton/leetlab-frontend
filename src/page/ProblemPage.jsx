import React from "react";
import { useParams } from "react-router-dom";
import Editor from "@monaco-editor/react";
import { Code } from "lucide-react";

import { useProblemStore } from "../store/useProblemStore";
import { useEffect } from "react";
import { useState } from "react";
import { CodeXml } from "lucide-react";

const ProblemPage = () => {
  const { id } = useParams();
  const {getProblemById, problem, isProblemLoading } = useProblemStore();
  
  const[ code, setCode]= useState("")
  const [activeTab, setActiveTab] = useState("description");
  const [seletedLanguage, setSelectedLanguage] = useState("javascript");
  const[ isBookmarked, SetIsBookmarked]= useState(false)
  const [testcases, setTestcases] = useState([]);
  
  
  useEffect(()=>{
    getProblemById(id)
  }, [id])
  
  
  return(
    <>
      
      <div className="border rounded-2xl border-sky-600 m-4 p-4 shadow-2xl">
        <div className="text-2xl "><Code />: { problem?.title} </div>
        <hr/>
        
        <div className="grid grid-cols-2 gap-2 p-4">
          <div  className="tabs tabs-box ">
            <input type="radio" name="my_tabs_3" className="tab" aria-label="Description" defaultChecked/>
            <div className="tab-content bg-base-100 border-base-300 p-6">
              <div className="text-xl">{ problem?.description}</div>
              <br/>
              <div>Difficulty : <div className="badge badge-soft badge-primary"> { problem?.difficulty}</div></div>
              <div className="shadow-2xl bg-indigo-500 p-4 rounded-xl"> Constraints : { problem?.constraints}</div>
            </div>
            <input type="radio" name="my_tabs_3" className="tab" aria-label="Hints" />
            <div className="tab-content bg-base-100 border-base-300 p-6">{ problem?.hints}</div>
            <input type="radio" name="my_tabs_3" className="tab" aria-label="Submissions" />
            <div className="tab-content bg-base-100 border-base-300 p-6">{ problem?.description}</div>
            <input type="radio" name="my_tabs_3" className="tab" aria-label="Description" />
            <div className="tab-content bg-base-100 border-base-300 p-6">{ problem?.description}</div>
          </div>
          <div className="rounded-2xl">
            <Editor
            height="500px"
            theme="vs-dark"
            className="rounded-2xl"
            />
          </div>
        </div>
        
        {JSON.stringify(problem)}
      </div>
    </>
  )
 
};

export default ProblemPage;
