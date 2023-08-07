import React from "react";
import StudentData from "./StudentData";
import { useNavigate } from "react-router-dom";
 const Student=()=>{
    const nav=useNavigate(); 
    return(
        <>
        <div id="firstLine">
        <h1>Student Details</h1>
        <button id="add" onClick={()=>nav('/addnewstudent')}>Add new student</button>
        </div>
        <div>
            <StudentData/>
        </div>
        </>
    )
 }
 export default Student