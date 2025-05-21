import { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import Clients_1 from '../../../assets/images/clients-logo-1.png'; // Correct import path
import Clients_2 from '../../../assets/images/clients-logo-2.png';
import Clients_3 from '../../../assets/images/clients-logo-3.png';
import Clients_4 from '../../../assets/images/clients-logo-4.png';
import Clients_5 from '../../../assets/images/clients-logo-5.png';
import Clients_6 from '../../../assets/images/clients-logo-6.png';
import './Clients.css'

const Clients = () => {
  const instaPosts = [
    { id: 1, image: Clients_1, alt: 'Clients 1' },
    { id: 2, image: Clients_2, alt: 'Clients 2' },
    { id: 3, image: Clients_3, alt: 'Clients 3' },
    { id: 4, image: Clients_4, alt: 'Clients 4' },
    { id: 5, image: Clients_5, alt: 'Clients 5' },
    { id: 6, image: Clients_6, alt: 'Clients 6' },
  ];

  const [displayPosts, setDisplayPosts] = useState([...instaPosts, ...instaPosts]);
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef(null);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    if (isHovered) return;

    const startAnimation = () => {
      const slider = sliderRef.current;
      if (!slider) return;

      const itemWidth = slider.children[0]?.offsetWidth || 0;
      const gap = parseInt(window.getComputedStyle(slider).gap) || 0;
      const step = itemWidth + gap;

      currentIndexRef.current += 1;
      const newPosition = -currentIndexRef.current * step;

      slider.style.transition = 'transform 0.5s ease-in-out';
      slider.style.transform = `translateX(${newPosition}px)`;

      if (currentIndexRef.current >= instaPosts.length) {
        setTimeout(() => {
          currentIndexRef.current = 0;
          slider.style.transition = 'none';
          slider.style.transform = 'translateX(0)';
          void slider.offsetWidth;
        }, 500);
      }
    };

    animationRef.current = setInterval(startAnimation, 3000);

    return () => {
      if (animationRef.current) clearInterval(animationRef.current);
    };
  }, [isHovered, instaPosts.length]);

  return (
    <section className="clients-section text-center py-4 py-sm-5">
      <Container>
        <div
          className="clients-slider-wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="clients-slider-container">
            <div className="clients-slider-track d-flex" ref={sliderRef}>
              {displayPosts.map((post, index) => (
                <div key={`${post.id}-${index}`} className="clients-slide ">
                  <div className="clients-logo" style={{ width: '110px', margin : "0px 30px"}}>
                    <img
                      src={post.image}
                      alt={post.alt}
                      className="img-fluid object-fit-cover"
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Clients;
