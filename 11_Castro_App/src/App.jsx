import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Blog from "./Components/Blog_Page/Blog";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUsMain from './Components/About_Page/About-Us';
import { Routes, Route, Link } from 'react-router-dom';
import  Header from './Components/Blog_Page/Header/Header';
import  TopHeader from './Components/Blog_Page/TopHeader/TopHeader';
import  Footer from './Components/Blog_Page/Footer/Footer';
import  OurService from "./Components/Services_Page/oue-service";
import  TestPage from "./Components/Testimonial_Page/TestimonialPage";
import  Contact from "./Components/Contact_page/Contact";
import './App.css'
import ElementMain from './Components/Element_Page/Element-Main';
import OurTeamMain from './Components/OurTeam_Page/Our-Team-Main'
import Page404Main from './Components/404_Page/404-Page-Main';
 
function App() {

  return (
    <>



<TopHeader/>
<Header/>
    <Routes>
      <Route  path="/" element={<Blog/>}  />
      <Route  path="/about" element={<AboutUsMain/>}  />
      <Route  path="/services" element={<OurService/>}  />
      <Route  path="/testimonial" element={<TestPage/>}  />
      <Route  path="/blog" element={<Blog/>}  />
      <Route  path="/contact" element={<Contact/>}  />
      <Route  path="/element" element={<ElementMain/>}  />
      <Route  path="/ourteam" element={<OurTeamMain/>}  />
      <Route  path="/404" element={<Page404Main/>}  />

    </Routes>
    <Footer/>
</>
  )
}

export default App;
