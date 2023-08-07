import React from "react";
import { NavLink } from "react-router-dom"; 

 const Header=()=>{
    return(
       
           
                <div className="header ">
                    <NavLink className='Link' to='/'>Home</NavLink>
                    <NavLink className='Link'  to='/student'>Student</NavLink>
                    <NavLink className='Link' to='/contact'>Contact</NavLink>
                
                 </div>
        
     
    )
 }
 export default Header