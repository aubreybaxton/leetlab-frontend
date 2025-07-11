import React from 'react'

function SubmissionList({ submissionByProblem }) {
    console.log("submissionByProblem", submissionByProblem)
    // Helper function to parse the data
    const parseData = (data) => {
        try {
            return JSON.parse(data)
        } catch (error) {
            console.error("Error parsing data:", error);
            return [];
        }
    }

    // helper fucntion to calculate the avg memory

    //const avgTime = submissionByProblem.map((sub) => ())

    return (
        <>
            {submissionByProblem && submissionByProblem.map((eachSubmission) => (

                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold flex ">

                        <div> Language: {eachSubmission.language} </div>
                        <div> Status :<div className={eachSubmission.status=== "accepted"? "badge-success":"badge-error"}>{eachSubmission.status}</div> </div>
                        <div> Time : </div>
                    </div>

                    <div className="collapse-content text-sm">
                        <div className="mockup-code w-full">
                            <pre data-prefix="$"><code>{eachSubmission.sourceCode}</code></pre>
                        </div>
                        
                    </div>
                </div>
            ))}
        </>
    )
}

export default SubmissionList