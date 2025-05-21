import { Col, Container, Row } from 'react-bootstrap';
import  {ExpertsCard } from '../../About_Page/Our-Expert-Team/OurExperts';
import team1 from '../../../assets/images/team-1.jpg';
import team2 from '../../../assets/images/team-2.jpg';
import team3 from '../../../assets/images/team-3.jpg';
import team4 from '../../../assets/images/team-4.jpg';
import team5 from '../../../assets/images/team-5.jpg';
import team6 from '../../../assets/images/team-6.jpg';
import './Our-Team.css';
const OurTeamComp = () => {
  return (
    <>
      <div class="Our-Expert-Section">
        <Container style={{ maxWidth: '1200px' }}>
          <Row className="gy-5">
            <Col xs={12} sm={6} md={4} className="text-center mb-4 mb-md-0">
              <ExpertsCard
                Expertsimg={team1}
                expertname="Leanne Simpson"
                expertField="Photographer"
              />
            </Col>
            <Col xs={12} sm={6} md={4} className="text-center mb-4 mb-md-0">
              <ExpertsCard
                Expertsimg={team2}
                expertname="Ray Cooper"
                expertField="Manager"
              />
            </Col>
            <Col xs={12} sm={6} md={4} className="text-center mb-4 mb-md-0">
              <ExpertsCard
                Expertsimg={team3}
                expertname="Caroline Johnson"
                expertField="Artist"
              />
            </Col>
            <Col xs={12} sm={6} md={4} className="text-center mb-4 mb-md-0">
              <ExpertsCard
                Expertsimg={team4}
                expertname="Edward Chapman"
                expertField="Photographer"
              />
            </Col>
            <Col xs={12} sm={6} md={4} className="text-center mb-4 mb-md-0">
              <ExpertsCard
                Expertsimg={team5}
                expertname="Daisy Murray"
                expertField="Manager"
              />
            </Col>
            <Col xs={12} sm={6} md={4} className="text-center mb-4 mb-md-0">
              <ExpertsCard
                Expertsimg={team6}
                expertname="Amanda Smith"
                expertField="Artist"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OurTeamComp;
