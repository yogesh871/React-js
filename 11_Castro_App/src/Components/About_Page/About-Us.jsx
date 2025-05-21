import BrandOverview from './Brand-intro/Brand-intro';
import CatagoryServices from './Catagory-services/Catagory-services';
import OurExperts from './Our-Expert-Team/OurExperts';
import InstagramFollow from './Instagram-follow/Instagram-follow';
import { Container } from 'react-bootstrap';
import Title from "../Blog_Page/Title/Title";


const AboutUsMain = () => {
  return (
    <>

      <Title title='About Us'/> 


      <Container className="p-0" >
        <BrandOverview />
      </Container>

      <Container fluid>
        <CatagoryServices />
      </Container>

      <Container className="p-0" >
        <OurExperts />
      </Container>

      <InstagramFollow  />

    </>
  );
};

export default AboutUsMain;
