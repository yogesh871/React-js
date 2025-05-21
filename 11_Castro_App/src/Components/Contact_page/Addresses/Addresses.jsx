import React from 'react'
import Maintitlebar from '../../About_Page/Head-design/MainHeadertext';
import separator2 from '../../../assets/images/separator-1.png';
import './Addresses.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OurContact from '../Our_Contact/OurContact';


const Addresses = () => {
    return (
         <>
         <Container >
         <div className="Address">

         <div className="Expert-head-info text-center">
        <Maintitlebar
          title="Our Addresses"
          description="Excepteur sint occaecat cupidatat non proident sunt"
          seperator={separator2}
          />
        </div>


        <Row>
           <Col lg={4} md={6} sm={12}>
            <OurContact title={'New York Office'} desc={'PO Box 16122 Collins Street West Victoria 8007 Canada'} />
        
           </Col >
           <Col lg={4}  md={6} sm={12}><OurContact title={'London Office'} desc={'PO Box 16122 Collins Street West Victoria 8007 Landon'} /></Col>
           <Col lg={4}  md={6} sm={12} >
           <OurContact title={'Netherlands Office'} desc={'PO Box 16122 Collins Street West Victoria 8007 Netherlands'} />
           </Col>
        </Row>


          </div>
          </Container>
         </>
    )

}
export default Addresses;