import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import './OurContact.css';

const OurContact = (props) => {
    return (
        <>
         <ul className="list-unstyled OurContact">
            <h2  style={{fontFamily : "Josefin Sans"}}>{props.title}</h2>
            <li className="d-flex"> 
                 <IoLocationOutline style={{fontSize : "35px",  color : "#848484"}} className="me-2 location-icon "/>
                  <span style={{ color : "#848484"}} > {props.desc}</span> 
           </li>
           <li className="mb-3"><IoMdCall  style={{fontSize : "20px", color : "#848484"}} className="me-2"/><a href="" style={{color : "#848484"}}>(+48) 564-334-21-22-34</a></li>
            <li className="mb-0"><MdOutlineMailOutline style={{fontSize : "20px" , color : "#848484"}} className="me-2 " /><a href="" style={{color : "#848484"}}>info@example.com</a></li>
           
        </ul>
        
        </>
    )
}
export default OurContact;