import React from 'react'
import { useState,useEffect } from "react";
import {useNavigate} from "react-router-dom"



const Login = () => {

    const [name, setName] = useState("");
    const [dob, setDOB] = useState("");
    const navigate=useNavigate();
    const [marklist, setMarklist] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await fetch('/marklist.json')
                .then((res) => res.json())
                .then((data) => setMarklist(data.marklist))
        }
        fetchData();

    }, [])
    
    
    
    function handleSubmit(e) {
        
        e.preventDefault();
        const id= marklist.find((i) => i.name== name).id
        navigate(`homepage/${id}`)
}

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Student Login</h1>
                <input type="text" name="name" placeholder="Enter name of student" value={name} onChange={(e) => setName(e.target.value)} className='form-control w-25' />
                <input type="text" name="dob" placeholder="Enter DOB in dd-mm-yyyy format" value={dob} onChange={(e) => setDOB(e.target.value)} className='form-control w-25' />
                <button className='btn btn-success' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login