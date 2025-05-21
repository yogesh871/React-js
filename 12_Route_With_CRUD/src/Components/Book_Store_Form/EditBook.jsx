import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { setStorageData, getStorageData } from "../../Services/localstorage";
import "./BookStore.css";

const EditBook = () => {
  const { id } = useParams();
  const initialState = {
    id: "",
    name: "",
    desc: "",
    price: "",
    image: "",
    category: "",
  };

  const [inputForm, setInputForm] = useState(initialState);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const books = getStorageData();
    const updatedBooks = books.map((book) =>
      book.id.toString() === id.toString() ? inputForm : book
    );
    setStorageData(updatedBooks);
    setInputForm(initialState);
    navigate("/");
  };

  useEffect(() => {
    const books = getStorageData();
    const updateData = books.find((book) => book.id.toString() === id.toString());
    if (updateData) {
      setInputForm(updateData);
    } else {
      navigate("/");
    }
  }, [id]);



  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Book Store App - Edit Book</h3>

      <div className="input_details">
        <label>Book Name:</label>
        <input
          type="text"
          name="name"
          value={inputForm.name}
          onChange={handleInput}
          placeholder="Enter Book Name"
        />
      </div>

      <div className="input_details">
        <label>Book Description:</label>
        <input
          type="text"
          name="desc"
          value={inputForm.desc}
          onChange={handleInput}
          placeholder="Enter Description"
        />
      </div>

      <div className="input_details">
        <label>Book Price:</label>
        <input
          type="text"
          name="price"
          value={inputForm.price}
          onChange={handleInput}
          placeholder="Enter Price"
        />
      </div>

      <div className="input_details">
        <label>Book Category:</label>
        <select name="category" value={inputForm.category} onChange={handleInput}>
          <option>Select Category</option>
          <option value="Comic">Comic</option>
          <option value="Story">Story</option>
          <option value="History">History</option>
        </select>
      </div>

      <div className="input_details">
        <label>Book Image URL:</label>
        <input
          type="text"
          name="image"
          value={inputForm.image}
          onChange={handleInput}
          placeholder="Enter Image URL"
        />
      </div>

      <button type="submit" className="btn text-light">Update Book</button>
    </form>
  );
};

export default EditBook;
