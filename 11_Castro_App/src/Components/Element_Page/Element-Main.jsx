import { Container } from 'react-bootstrap';
import Title from '../Blog_Page/Title/Title';
import Categorysection from '../Home_Page/Categorysection/Categorysection'

const ElementMain = () => {
  return (
    <>
      <Title title='Element'/>
      <Container style={{ maxWidth: '1200px' }}>
        <Categorysection showTitle={false} />
      </Container>
    </>
  );
};
export default ElementMain;
