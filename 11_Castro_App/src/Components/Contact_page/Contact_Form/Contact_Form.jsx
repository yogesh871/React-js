import React from "react";
import './Contact_Form.css';
import Maintitlebar from '../../About_Page/Head-design/MainHeadertext';
import separator2 from '../../../assets/images/separator-1.png';
import Container from 'react-bootstrap/Container';
import { CgArrowTopRight } from 'react-icons/cg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import OurContact from '../Our_Contact/OurContact';

const  ContactForm =  () => {
    return ( 
        <>
        <Container>
        <div className="Conatact_Form">
            
        <div className="Expert-head-info text-center">
        <Maintitlebar
          title="Get In Touch"
          description="Excepteur sint occaecat cupidatat non proident sunt"
          seperator={separator2}
          />
        </div>



    <Form>
      <div className="input_Details d-flex gap-4">
      <Form.Group className="mb-4 w-50" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Name"/>
      </Form.Group>
      <Form.Group className="mb-4 w-50" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group> 
      </div>
      <div className="input_Details  d-flex gap-4">
      <Form.Group className="mb-4 w-50" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Subject" />
      </Form.Group>
      <Form.Group className="mb-4 w-50" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Phone" />
      </Form.Group>
      </div>
      
      <FloatingLabel controlId="floatingTextarea2" label="Message">
        <Form.Control
          as="textarea"
          placeholder="Message"
          style={{height : "170px"}}  
         
        />
           </FloatingLabel>

           <div className="message-btn text-center">


           <button className="btn-hover Contact-us-btn fw-semibold mt-3">
              Send Message  <CgArrowTopRight style={{ fontSize: '26px' }} />
            </button>
           </div>
    
     
    </Form>
  
        </div>
        </Container>
        </>
    )

} 
export default ContactForm;