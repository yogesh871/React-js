import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Head from './services-head/service-head';
import ServicesCard from './service-card/services-card';
import servie1 from "../../assets/images/service-card-img-1.jpg";
import servie2 from "../../assets/images/service-card-img-2.jpg";
import servie3 from "../../assets/images/service-card-img-3.jpg";
import SaleComp from './sale-comp/sale-comp';
import TestimonialSlider from "./slider/sliderComp";
import Title from "../Blog_Page/Title/Title";

import Cursor from './curser-Comp/cursor'

function OurService() {

  return (
    <>
    <Title title='Our Services'/> 
    <ServicesCard title="Fashion Design" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sed ut perspici" image={servie1}/>
    <ServicesCard title="Furniture Design" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sed ut perspici" image={servie2}></ServicesCard>
    <ServicesCard title="Handmade Craft" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sed ut perspici" image={servie3}/>
    <SaleComp/>
    <TestimonialSlider />
    </>
  )
}

export default OurService;
