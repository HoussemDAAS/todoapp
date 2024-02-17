import React from 'react'
import NewTask from './NewTask'

const Tasks = ({tasks,onAdd,onDelete}) => {


  return (
    <div>
      <h2 className='h2-bold text-stone-700 mb-4'>Tasks</h2>
      <NewTask onAdd={onAdd}/>
{tasks.length === 0 ?<p className='text-stone-800 my-4'>No tasks</p> :
<ul>
    {tasks.map((task) => {
        return <li key={task.id} className='flex items-center gap-4'>
        <p className='text-stone-700'>{task.title}</p>
        <button onClick={()=>onDelete(task.id)} className='btn-hover'>Delete</button>
        </li>
    })}
</ul>}
    </div>
  )
}

export default Tasks
