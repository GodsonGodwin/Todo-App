import React, {useState} from "react";
import Header from "./component/Header";
import Tasks from "./component/Tasks";
import AddTask from "./AddTask";
import Time from "./Time";


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb. 5th @ 2:30pm',
      reminder: true,
    },
  
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb. 6th @ 1:30pm',
      reminder: true,
    },
  
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb. 7th @ 2:30pm',
      reminder: true,
    }
  
  ])

  //DELETING TO DO ITEM
  const deleteTask = (id) =>{
   setTasks(tasks.filter((tasks)=> tasks.id !== id))
  }

  //REMINDER
  const reminder = (id)=>{
    setTasks(tasks.map((tasks)=> tasks.id === id ? {...tasks, reminder: !tasks.reminder} : tasks))
  }

  //ADD TODO
  const addTask = (task) =>{
    const id = Math.floor(Math.random() * 100000) + 1;
   const newTask = {id, ...task}
   setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Time  />
     <Header  onAdd={()=> setShowAddTask(!showAddTask)} title='Task Tracker'/>

     {showAddTask && <AddTask onAdd={addTask} />}
     
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} toggle={reminder}/> : 
     <h2 style={{backgroundColor:'steelblue', color:'#fff', textAlign:'center', padding: '10px', marginTop: '50px'}}> No Task</h2>}
    
    </div>
  );
}

export default App;
