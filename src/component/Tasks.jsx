import React from 'react'
import Task from '../Task'


const Tasks = ({tasks, onDelete, toggle}) => {

  return (
    <>
      {tasks.map((tasks)=> (<Task key={tasks.id} tasks={tasks} onDelete={onDelete} toggle={toggle}/>))}
    </> 

  )
}

export default Tasks