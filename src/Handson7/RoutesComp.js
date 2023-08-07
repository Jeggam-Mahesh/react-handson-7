import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import Student from "./Student";
import EditStudent from "./EditStudent";
import AddNewStudent from "./AddNewStudent";
import {Routes,Route} from 'react-router-dom'

const RoutesComp=()=>{
    return(
        <>
       
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/student' element={<Student/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/editstudent' element={<EditStudent/>}/>
        <Route path='/addnewstudent' element={<AddNewStudent/>}/>
   
    </Routes>
        </>
    )
 }
 export default RoutesComp