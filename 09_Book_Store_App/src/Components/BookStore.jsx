import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdDeleteSweep } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import "./BookStore.css";

const getStorageData = () => {
  const books = JSON.parse(localStorage.getItem("books"));
  return books ? books : [];
};

const BookStore = () => {
  const initialState = {
    id: "",
    Name: "",
    desc: "",
    price: "",
    Image: "",
    category: ""
  };

  const [inputForm, setInputForm] = useState(initialState);
  const [storageData, setStorageData] = useState(getStorageData());
  const [isEdit, setIsEdit] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      setStorageData((books) =>
        books.map((book) => (book.id === inputForm.id ? inputForm : book))
      );
    } else {
      const id = Math.floor(Math.random()*1000);
      setStorageData([...storageData, { ...inputForm, id }]);
    }

    setInputForm(initialState);
    setIsEdit(false);
  };

  const handleDelete = (id) => {
    setStorageData(storageData.filter((book) => book.id !== id));
  };

  const handleEdit = (book) => {
    setInputForm(book);
    setIsEdit(true);
  };

  useEffect(() => {
  
    localStorage.setItem("books", JSON.stringify(storageData));
  }, [storageData]);

  return (
    <>
      <Form className="w-75 mx-auto mt-4" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Book Name :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Book Name"
            name="Name"
            value={inputForm.Name}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Book Description :</Form.Label>
          <Form.Control
            type ="text"
            rows={3}
            placeholder="Description"
            name="desc"
            value={inputForm.desc}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Book Price :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Book Price"
            name="price"
            value={inputForm.price}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Book Category :</Form.Label>
          <Form.Select
            name="category"
            value={inputForm.category}
            onChange={handleInput}
          >
            <option value="">Select Category :</option>
            <option value="Story">Story</option>
            <option value="History">History</option>
            <option value="Comic">Comic</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Book Image URL :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Book Image URL"
            name="Image"
            value={inputForm.Image}
            onChange={handleInput}
          />
        </Form.Group>

        <Button type="submit" variant="outline-info">
          {isEdit ? "Update Book" : "Add Book"}
        </Button>
      </Form>

      <Row xs={1} md={3} lg={4} className="g-4 m-4">
        {storageData.map((book) => (
          <Col key={book.id}>
            <Card style={{width : "300px"}}>
              <Card.Img
                variant="top"
                src={book.Image}
                alt={book.Name}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{book.Name}</Card.Title>
                <Card.Text>
                  <strong>Category:</strong> {book.category}
                </Card.Text>
                <Card.Text>{book.desc}</Card.Text>
                <Card.Text>
                  <strong>Price:</strong> ₹{book.price}
                </Card.Text>
                <div className="d-flex justify-content-start gap-3">
                  <Button variant="warning" onClick={() => handleEdit(book)}>
                    <FaEdit />
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(book.id)}>
                    <MdDeleteSweep />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default BookStore;
