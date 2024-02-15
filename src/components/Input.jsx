import React from 'react'

const Input = ({textarea, Label, ...props}) => {
  return (
    <p className='flex flex-col gap-2 my-4'>
    <label className='text-sm font-bold uppercase text-stone-500'>{Label}</label>
   {textarea ? <textarea {...props}  className='textarea-style'/> : <input {...props} className='input-style'  />}
  </p>
  )
}

export default Input
