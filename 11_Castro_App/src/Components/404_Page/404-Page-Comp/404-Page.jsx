import { Container } from 'react-bootstrap';
import { CgArrowTopRight } from 'react-icons/cg';
import './404-Page.css';
import Title from '../../Blog_Page/Title/Title';
import { useNavigate } from 'react-router';

const Page404 = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')

  }
  return (
    <>
      <Title title='Page Not Found'/>
      <Container>
        <section class="error-section text-center">
          <div class="error-container">
            <h1 class="error-code">404</h1>
            <h2 class="error-message">Oops! Page Not Found!</h2>
            <p
              style={{
                color: '#848484',
                marginBottom: '57px',
                fontSize: '15px',
              }}
              class="error-description"
            >
              Please go back to
              <a
                href="index.html"
                style={{ marginLeft: '5px', color: '#FF4135' }}
                class="link-home text-decoration-underline"
              >
                Back homepage
              </a>
            </p>
            <div class="error-buttons d-flex justify-content-center gap-4">
              <button className="home-button  fw-semibold" onClick={handleClick}>
                Go Back To Home   <CgArrowTopRight style={{ fontSize: '25px' }} />
              </button>
              <button className="btn-hover fw-semibold">
                Continue Shopping
                <CgArrowTopRight style={{ fontSize: '25px' }} />
              </button>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Page404;
