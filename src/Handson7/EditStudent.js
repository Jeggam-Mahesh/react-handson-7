import React, { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { EditedStudent } from "../features/StudentSlice";
const EditStudent=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const data=useLocation();
    const studentId=data.state;
    console.log("sfdsgfdsgsds",studentId);
    const stData=useSelector((state)=>state.Student.filter((item)=>item.id===studentId));

    const {Name,Age,Batch,Course}=stData[0];
    console.log("data fromn name",Name)
    console.log(Age)
    console.log(Batch)
    console.log(Course)
    const [newName,setName]=useState(Name)
    const [newAge,setAge]=useState(Age)
    const [newBatch,setBatch]=useState(Batch)
    const [newCourse,setCourse]=useState(Course)
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(EditedStudent({
        id:studentId,
        newName,
        newAge,
        newBatch,
        newCourse
    }))
    
 navigate('/student');
  }
    return(
        <>
        <h1>Edit Student</h1>
        
        <form onSubmit={handleSubmit}> 
        <div className="form_box"> 
        <div className="temp">
          <div>
          <label htmlFor="name">Name</label>
        <input type="text" id='name' value={newName} onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div>
          <label htmlFor="age">Age</label>
        <input type="number" id='age' value={newAge} onChange={(e)=>setAge(e.target.value)}/>
          </div>
        </div>
        <div className="temp">
          <div>
          <label htmlFor="batch">Batch</label>
        <input type="text" id='bacth' value={newBatch} onChange={(e)=>setBatch(e.target.value)}/>
          </div>
          <div>
          <label htmlFor="course">Course</label>
        <input type="text" id='course' value={newCourse} onChange={(e)=>setCourse(e.target.value)}/>
          </div>
        </div>
       <div>
       {/* <input type="submit" value='Edit'/> */}
       <button onClick={()=>navigate('/student')}>cancel</button>
       <button>Edit</button>
       </div>
      
        
       
       
       
        </div>
        </form>
        </>
    )
 }
 export default EditStudent