import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {useNavigate} from "react-router-dom"
import "./homepage.css"
import { useState, useEffect } from 'react'
import { useParams,Link} from 'react-router-dom'

const Homepage = ({ name, dob }) => {
    const navigate=useNavigate();
 
    const [marklist, setMarklist] = useState([])
 

    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            await fetch('/marklist.json')
                .then((res) => res.json())
                .then((data) => setMarklist(data.marklist))
        }
        fetchData();

    }, [])

    const student = marklist.find((i) => i.id== id)
    

    
    

    function setGrade(mark){
        if (mark>=90){
            return "A"
        }
        else if(mark>=80 && mark<=89){
            return "B"
        }
        else if(mark>=70 && mark<=79){
            return "C"

        }
        else if(mark>=60 && mark<=69){
            return "D"

        }
        else{
          
            return "Failed"
        }
    }
 function setTotal(marks){

const totalMarks=(marks.Maths+marks.Malayalam+marks.Hindi+marks.English)

if(marks.English <60 ||marks.Hindi<60 ||marks.Maths<60 || marks.Malayalam <60){
  return "Failed"

}
else{
    // return Math.round(((student.marks.Maths+student.marks.Malayalam+student.marks.Hindi+student.marks.English)/400)*100)
    return (totalMarks)
}


 }

 function setPercent(marks){

    const totalPercent=Math.round(((student.marks.Maths+student.marks.Malayalam+student.marks.Hindi+student.marks.English)/400)*100)
    
    if(marks.English <60 ||marks.Hindi<60 ||marks.Maths<60 || marks.Malayalam <60){
      return "Failed"
    
    }
    else{
        // return Math.round(((student.marks.Maths+student.marks.Malayalam+student.marks.Hindi+student.marks.English)/400)*100)
        return (totalPercent)
    }
    
    
     }
    

   
  

   
    return (
        <div className="container">
{student? (

<Card  className="card" style={{ width: '18rem' }}>
<Card.Header><span>Name:</span> {student.name}</Card.Header>
<ListGroup variant="flush">
  <ListGroup.Item ><span>Date of Birth:</span> {student.dob} </ListGroup.Item>
  <ListGroup.Item><span className="marklist-title">Marklist</span> </ListGroup.Item>
  <ListGroup.Item>English: {student.marks.English} | Grade: {setGrade(student.marks.English)}</ListGroup.Item>
  <ListGroup.Item>Hindi: {student.marks.Hindi} | Grade: {setGrade(student.marks.Hindi)}</ListGroup.Item>
  <ListGroup.Item>Malayalam: {student.marks.Malayalam} | Grade: {setGrade(student.marks.Malayalam)}</ListGroup.Item>
  <ListGroup.Item>Maths: {student.marks.Maths} | Grade: {setGrade(student.marks.Maths)}</ListGroup.Item>
  <ListGroup.Item><span>Total Marks:</span> {setTotal(student.marks)}</ListGroup.Item>
  
  <ListGroup.Item><span>Total Percentage(%):</span> {setPercent(student.marks)}</ListGroup.Item>
</ListGroup>
</Card>



):"null"}

<Link className=" btn btn-outline-dark mt-3 rounded" to="/"><i className="fas fa-home"></i> View Another</Link>

        </div>
    )
}

export default Homepage