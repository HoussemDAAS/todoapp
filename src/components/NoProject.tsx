import React from 'react'

const NoProject = ({start}) => {
  return (
    <div className='flex flex-col items-center w-2/3 mt-20 gap-4'>
      <img src="/src/assets/no-projects.png" alt="project"  className="w-1/3" />
      <h2 className="h2-bold uppercase text-stone-500">No Project Selected</h2>
      <p>Please select a project or get started with new one</p>
      <p>
        <button className="btn-hover" onClick={start}>Get Started</button>
      </p>
    </div>
  )
}

export default NoProject
