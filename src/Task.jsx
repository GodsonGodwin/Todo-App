import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({tasks, onDelete, toggle}) => {
    
  return (
    <div className={`task ${tasks.reminder ? 'reminder' : ''} `} onDoubleClick={() => toggle(tasks.id)}>
        <h3>{tasks.text} <FaTimes style={{color:"red"}} onClick={()=> onDelete(tasks.id)}/> </h3>
        <p style={{fontSize: '10px', paddingTop: '5px'}}>{tasks.day}</p>

        </div>
  )
}

export default Task