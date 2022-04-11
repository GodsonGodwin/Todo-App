import React, {useState, useEffect} from 'react'

const Time = () => {
    const [time, setTime] = useState("");
  
    useEffect(() => {
      setInterval(() => {
        const date = new Date();
        let hour = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
        let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
        let seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`; 
        console.log({hour, minutes, seconds});       
        setTime(`${hour}: ${minutes}: ${seconds}`);
          
        
        
        
      }, 1000);
    }, []);
  
    return (
      <div>
        <h5 style={{
          fontSize:'25px', 
          color:'steelblue',
          border: "2px solid gray",
          padding:'10px',
          width: '150px',
          margin:' 0 auto' }}> {time} </h5>
      </div>
    );
  };
  
  export default Time;