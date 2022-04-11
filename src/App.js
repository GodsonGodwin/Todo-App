import React, {useEffect, useState} from "react";
import Header from "./component/Header";
import Tasks from "./component/Tasks";
import AddTask from "./AddTask";
import Time from "./Time";


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([ ]);

  const audio = () =>{
    const audioTune = new Audio('./assests/audio.mp3');
    audioTune.play();
  }

  
  
  

  useEffect(()=>{
    tasks.forEach((task)=>{
        //logic for setting alarm per task.
        let timeToFire = (task.day).split(':');
        let timeSplit = new Date()
        timeSplit.setHours(timeToFire[0]);
        timeSplit.setMinutes(timeToFire[1]);
        timeSplit.setSeconds(0);
        timeSplit.getTime()
        
        let setAlarm = timeSplit.getTime()
        let currentTime =  new Date().getTime();
        let timeLeft = setAlarm - currentTime
       
  
        setTimeout(()=>{
            audio()
          },
         timeLeft) 
         
         
        console.log(currentTime, setAlarm, timeLeft, timeToFire)
    });
    
    
  },[tasks]);


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
