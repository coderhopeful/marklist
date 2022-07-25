import React from 'react'
import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Homepage from './Homepage';

const Login = () => {

    const [name, setName] = useState("");
    const [dob, setDOB] = useState("");
    const navigate = useNavigate()

  

    function handleSubmit(event) {
        event.preventDefault();

       
<Homepage name="name" dob="dob"/>
       
       }
    


  return (
    <div className="container">
        <h1>Student Login</h1>
    <input type="text" name="name" placeholder="Enter name of student"  value={name} onChange={(e) => setName(e.target.value)} className='form-control w-25' />
    <input type="text" name="dob" placeholder="Enter DOB in dd-mm-yyyy format" value={dob} onChange={(e) => setDOB(e.target.value)}  className='form-control w-25' />
    <button className='btn btn-success' onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login