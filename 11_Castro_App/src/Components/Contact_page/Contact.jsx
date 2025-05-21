import React from "react";
import Title from "../Blog_Page/Title/Title";
import Addresses from "./Addresses/Addresses";
import GoogleMap from "./Google_Map/Google_map";
import ContactForm from "./Contact_Form/Contact_Form";
import  Clients from "./Clients/Clients";    



const Contact = () => {
    return (
        <>
        <Title title='Contact Us'/>
        <Addresses/>
        <GoogleMap/>
        <ContactForm/>
        <Clients/>
        
        </>
    )
} 
export default Contact;