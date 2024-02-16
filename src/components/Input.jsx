import React from 'react'
import { forwardRef } from 'react'
const Input= forwardRef( function Input ({textarea, Label, ...props},ref) {
  return (
    <p className='flex flex-col gap-2 my-4'>
    <label className='text-sm font-bold uppercase text-stone-500'>{Label}</label>
   {textarea ? <textarea {...props} ref={ref} className='textarea-style'/> : <input {...props} className='input-style'  ref={ref}/>}
  </p>
  )
})

export default Input
