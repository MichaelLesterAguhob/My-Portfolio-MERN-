import React from 'react'

const ResumeUpload = () => {
  return (
    <div className="manage-projects bg-slate-600 p-2 mt-4 rounded-[10px]">
          <h1 className="text-2xl">Resume</h1>
          <div className="border-t p-2 flex flex-col md:flex-row justify-between items-center">
            <input
              type="file"
              name="resume"
              id="resume"
              className="rounded bg-slate-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-[50%] hover:cursor-pointer p-1 mt-2"
            />
            <span className="text-sm text-green-500 mx-1 w-full md:w-auto"><strong>Uploaded:</strong> resume.pdf</span>
            <button type="button" className="btn btn-accent text-black mt-2 w-full md:w-auto">
              Save
            </button>
          </div>
        </div>
      
  )
}

export default ResumeUpload