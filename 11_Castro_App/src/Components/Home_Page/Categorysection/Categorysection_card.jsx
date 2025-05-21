import '../Categorysection/Categorysection.css';

function Categorysection_card(props) {
  return (
    <>
      <div className="category_item d-flex flex-column align-items-center justify-content-center">
        <img src={props.img} alt="category" className="category_img mb-2" />
        <a
          href="#"
          className="text-decoration-none text-center mt-2 "
          style={{
            fontWeight: '600',
            fontFamily: 'Josefin Sans, sans-serif',
            color: '#222',
            fontSize: '18px',
          }}
        >
          {props.name}
        </a>
      </div>
    </>
  );
}

export default Categorysection_card;
