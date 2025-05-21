import React, { useEffect, useState } from "react";
import { getStorageData, setStorageData } from "../../Services/localstorage";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Home.css";
import { Container } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router";

const Home = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const data = getStorageData();
    setBooks(data);
  }, [location]); 

  const handleDelete = (id) => {
    const updatedBooks = books.filter((book) => book.id.toString() !== id.toString());
    setBooks(updatedBooks);
    setStorageData(updatedBooks);
  };

  const handleNavigate = (id) => {
    navigate(`/EditBook/${id}`);
  };

  return (
    <div className="home">
      <Container>
        <h3>Book Store App</h3>

        <div className="books_cards d-flex mt-5 flex-wrap justify-content-center text-align-center">
          { books.length > 0 ? (
            books.map((book) => (
              <Card key={book.id} style={{ margin: "10px", width: "18rem" }}>
                <Card.Img variant="top" style={{ height: "250px", objectFit: "cover" }} src={book.image} />
                <Card.Body>
                  <Card.Title>{book.name}</Card.Title>
                  <Card.Text>{book.desc}</Card.Text>
                  <Card.Text>{book.price}</Card.Text>
                  <Card.Text>{book.category}</Card.Text>
                  <div className="d-flex gap-2">
                    <Button variant="primary" onClick={() => handleNavigate(book.id)}>Edit</Button>
                    <Button variant="danger" onClick={() => handleDelete(book.id)}>Delete</Button>
                  </div>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p>No books found. Add some from the form.</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Home;
