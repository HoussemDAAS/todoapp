import React from 'react'
import noProject from '../assets/no-projects.png'
const NoProject = ({start}) => {
  return (
    <div className='flex flex-col items-center w-2/3 mt-[7rem] gap-4'>
      <img src={noProject} alt="project"  className="w-16 h-16 object-contain mx-auto" />
      <h2 className="h2-bold uppercase text-stone-500 my-4">No Project Selected</h2>
      <p className='text-stone-400 mb-2'>Please select a project or get started with new one</p>
      <p>
        <button className="btn-hover" onClick={start}>Create new project</button>
      </p>
    </div>
  )
}

export default NoProject
