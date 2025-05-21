import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import {Link} from "react-router"
 

const  Header = () => {
  const navigate =  useNavigate()

    const handleNavigate = () => {
        navigate('/addBook')
    }
    
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link  to={'/'} className='text-black text-decoration-none'> Home</Link></Navbar.Brand>
        <Navbar.Brand >About</Navbar.Brand>
        <Navbar.Brand >Services</Navbar.Brand>
        <Navbar.Brand >Blog</Navbar.Brand>
        <Navbar.Brand >Contact</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Button variant="primary"  style={{width : "max-content"}} onClick={handleNavigate}>Add Book</Button>
            {/* <BookStore/>  */}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;