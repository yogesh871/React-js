// import AboutUs from '../About-Us-Page/About Us/AboutUS';
import Title from '../Blog_Page/Title/Title';
import  React from 'react'
import OurTeamComp from './Our-Team-Comp/Our-Team';

const OurTeamMain = () => {
  return (
    <>
      {/* <AboutUs title={'Our Experts'} pathHierarchy="Our Experts" /> */}
      <Title title='Our Experts'/>
      <OurTeamComp />
    </>
  );
};
export default OurTeamMain;
