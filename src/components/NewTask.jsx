import React from 'react'
import Input from './Input'

const NewTask = ({onAdd}) => {
   const [task,settask]=useState('');
   const handlesave = (e) => {
       settask(e.target.value);
    }
    const handleClick = () => {
        onAdd(task);
        settask('');
    }

  return (
    <div className='flex item-center gap-4 '>
      <Input  type="text" onChange={(e)=>handlesave(e)} value={task}/>
      <button className='btn-hover ' onClick={handleClick}>Add Task</button>
    </div>
  )
}

export default NewTask
