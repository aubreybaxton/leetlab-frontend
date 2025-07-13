import React from 'react';
import { CheckCircle2, XCircle, Clock, MemoryStick as Memory } from 'lucide-react';


function SubmissionResult({ submission }) {
    // Pasre Stingified array
    const memoryArray = JSON.parse(submission.memory || "[]")
    const timeArray = JSON.parse(submission.time || '[]')

    const avgMemory = memoryArray.map((m) => (parseFloat(m))).reduce((a, b) => a + b, 0)/memoryArray.length;
    const avgTime = timeArray.map((t) => (parseFloat(t))).reduce((a, b) => a + b, 0)/timeArray.length;
    console.log("average", avgMemory)
    console.log("average", avgTime)

    const passedTestCases = submission.testCases.filter((tc) => (tc.passed)).length;
    const totalTestCases = submission.testCases.length;

    const successRate = (passedTestCases / totalTestCases) * 100;


    return (
        <div className='flex justify-center m-4'>

            <div className="grid grid-cols-4 gap-4 ">
                {/* grid card 1 */}
                <div className="card bg-base-200 shadow-lg text-center">
                    <div className="card-body p-4">
                        <h3 className="card-title text-sm justify-center">Status</h3>
                        <div className={`text-lg font-bold ${submission.status === 'Accepted' ? 'text-success' : 'text-error'
                            }`}>
                            {submission.status}
                        </div>
                    </div>
                </div>
                {/* grid card 2 */}
                <div className="card bg-base-200 shadow-lg text-center">
                    <div className="card-body p-4">
                        <h3 className="card-title text-sm justify-center">Average Memory</h3>
                        <div className="text-lg font-bold">
                            {avgMemory.toFixed(3)}
                        </div>
                    </div>
                </div>
                {/* grid card 3 */}
                <div className="card bg-base-200 shadow-lg text-center">
                    <div className="card-body p-4">
                        <h3 className="card-title text-sm justify-center">Average Time</h3>
                        <div className="text-lg font-bold">
                            {avgTime.toFixed(3)}
                        </div>
                    </div>
                </div>
                {/* grid card 4 */}
                <div className="card bg-base-200 shadow-lg text-center">
                    <div className="card-body p-4">
                        <h3 className="card-title text-sm justify-center">Testcase Success </h3>
                        <div className="text-lg font-bold">
                            {successRate}{" %"}
                        </div>
                    </div>
                </div>

                {/* grid card 5 */}
                <div className="card bg-base-200 shadow-lg text-center col-span-4">
                    <div className="card-body p-4">
                        <h3 className="card-title text-sm justify-center">Testcase Passed </h3>
                        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                            {submission.testCases.map((tc) => (
                                <table className="table text-center" key={tc.id}>
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Status</th>
                                            <th>Expected Output</th>
                                            <th>Your Output</th>
                                            <th>Memory</th>
                                            <th>Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <th>{tc.testCase}</th>
                                            <td>{tc.passed ?
                                                <div className='text-success'>
                                                    <CheckCircle2 />
                                                    Passed
                                                </div> :
                                                <div>
                                                    <XCircle />
                                                    Failed
                                                </div>}</td>
                                            <td>{tc.expected}</td>
                                            <td>{tc.stdout}</td>
                                            <td>{tc.memory}</td>
                                            <td>{tc.time}</td>
                                        </tr>

                                    </tbody>
                                </table>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="p-4 card bg-base-200 shadow-lg text-center col-span-4">Submit :{new Date(submission.updatedAt).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: '2-digit',
                    minute: '2-digit',
                })}
                </div>
            </div>
        </div>
    )
}

export default SubmissionResult;