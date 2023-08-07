import {  createSlice } from "@reduxjs/toolkit";
import Student from "../Data";
const StudentSlice=createSlice({
    name:'Student',
    initialState:Student,
    reducers:{
    AddStudent:(state,action)=>{
        state.push(action.payload);
    },
    EditedStudent:(state,action)=>{
        const {id,newName,newAge,newBatch,newCourse}=action.payload;
        const existingStudent=state.find((student)=>student.id===id);
        existingStudent.Name=newName;
        existingStudent.Age=newAge;
        existingStudent.Batch=newBatch;
        existingStudent.Course=newCourse;
        
    }
    }
})
export const {AddStudent,EditedStudent}=StudentSlice.actions;
export default StudentSlice.reducer;
