import React from 'react';
import { MemoryStick, Clock4 } from 'lucide-react';

function SubmissionList({ submissionByProblem }) {
    console.log("submission By Problem", submissionByProblem)
    if (!submissionByProblem || submissionByProblem.length === 0) {
        return (
            <div className="text-center p-8">
                <div className="text-base-content/70">No submissions yet</div>
            </div>
        );
    }
    // Helper function to parse the data
    const parseData = (data) => {
        if (typeof data !== 'string') {
            console.warn("Skipping non-string data in parseData:", data);
            return [];
        }
        try {
            return JSON.parse(data)
        } catch (error) {
            console.error("Error parsing data:", error);
            return [];
        }
    }

    // helper fucntion to calculate the avg memory
    const calculateAvgMemory = (memoryData) => {
        const memoryArray = parseData(memoryData).map((memory) => (
            parseFloat(memory.split(" ")[0])
        ))

        if (memoryData.length === 0) return 0;
        return (
            memoryArray.reduce((acc, current) => acc + current, 0) / memoryArray.length
        )
    }

    // Helper function to calculate avg time
    const calculateAvgTime = (timeData) => {
        const timeArray = parseData(timeData).map((t) =>
            parseFloat(t.split(" ")[0])
        );
        if (timeArray.length === 0) return 0;
        return timeArray.reduce((acc, curr) => acc + curr, 0) / timeArray.length;
    };



    if (submissionByProblem === null) {
        return (
            <div>no Submission</div>
        )
    }

    if (!submissionByProblem?.length) {
        return (
            <div className="text-center p-8">
                <div className="text-base-content/70">No submissions yet</div>
            </div>
        );
    }
    return (
        <>
            {submissionByProblem && submissionByProblem.map((eachSubmission) => {
                const avgMemory = calculateAvgMemory(eachSubmission.memory);
                console.log("memory", eachSubmission.memory)
                const avgTime = calculateAvgTime(eachSubmission.time);
                return (
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300" key={eachSubmission.id}>
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold flex justify-around">

                            <div> {eachSubmission.language} </div>
                            <div className={eachSubmission.status === "Accepted" ? " badge badge-success" : " badge badge-error"}>{eachSubmission.status}</div>
                            <div className='flex '><MemoryStick /> {avgMemory.toFixed(2)} {"KB"} </div>
                            <div className='flex '> <Clock4 /> : {avgTime.toFixed(3)} {"s"}</div>
                        </div>

                        <div className="collapse-content text-sm">
                            <div className='card'> Submit At :{new Date(eachSubmission.createdAt).toLocaleString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                hour: '2-digit',
                                minute: '2-digit',
                            })}</div>
                            <div className="mockup-code w-full">
                                <pre className='p-4'><code>{eachSubmission.sourceCode}</code></pre>
                            </div>

                        </div>
                    </div>
                )
            })}


        </>
    )
}

export default SubmissionList