import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Homepage = ({ name, dob }) => {


    const [marklist, setMarklist] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await fetch('/marklist.json')
                .then((res) => res.json())
                .then((data) => setMarklist(data.marklist))
        }
        fetchData();

    }, [])


    const student = marklist.find((i) => i.name == name)



    return (
        <div>

            <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{student.name}</li>
                    <li class="list-group-item">{student.dob}</li>
                    <li class="list-group-item">{student.marks.malayalam}</li>
                    <li class="list-group-item">{student.marks.english}</li>
                    <li class="list-group-item">{student.marks.hindi}</li>
                    <li class="list-group-item">{student.marks.maths}</li>
                </ul>
            </div>





        </div>
    )
}

export default Homepage