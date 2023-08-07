import React from "react";
import { useState } from "react";
import { AddStudent } from "../features/StudentSlice";

import {useDispatch} from 'react-redux'
// import Student from "../Data";
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
 const AddNewStudent=()=>{
    const studentList=useSelector((state)=>state.Student)
    const nav=useNavigate() 
    const dispatch=useDispatch();
    console.log(dispatch);
    const [Name,setName]=useState('')
    const [Age,setAge]=useState('')
    const [Batch,setBatch]=useState('')
    const [Course,setCourse]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(Name)
        console.log(Age);
        dispatch(AddStudent({
            Id:studentList.length,
            Name,
            Age,
            Batch,
            Course
        }))
       setName('');
       setAge('');
       setBatch('');
       setCourse('');
       nav('/student');
    }
    return(
        <>
        <h1>Add New Student</h1>
        <form onSubmit={handleSubmit}>
        <div className="form_box">
        <div className="temp">
            <div>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' value={Name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                <label htmlFor="age">Age</label>
        <input type="number" id='age' value={Age} onChange={(e)=>setAge(e.target.value)}/>
                </div>
      </div>
      <div className="temp">
        <div>
        <label htmlFor="batch">Batch</label>
        <input type="text" id='bacth' value={Batch} onChange={(e)=>setBatch(e.target.value)}/>
        </div>
        <div>
        <label htmlFor="course">Course</label>
        <input type="text" id='course' value={Course} onChange={(e)=>setCourse(e.target.value)}/>
        </div>

      </div>
        
       <div>
       {/* <input type="submit" value='submit'/> */}
       <button type="button" onClick={()=>nav('/student')}>Cancel</button>
       <button>submit</button>
       
       </div>
        
       
       
        </div>
        </form>
        </>
    )
 }
 export default AddNewStudent  