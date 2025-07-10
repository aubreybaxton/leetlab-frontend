import React from 'react'
import { useSubmissionStore } from '../store/useSubmissionStore'

function SubmissionList() {
    const { submissionByProblem,getSubmissionByUserAndProblem, getSubmissionCount, isLoading } = useSubmissionStore()
    return (
        <>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">How do I create an account?</div>
                <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
            </div>
        </>
    )
}

export default SubmissionList