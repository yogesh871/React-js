import React, { useState } from "react";
import { useNavigate } from "react-router";
import { setStorageData, getStorageData } from "../../Services/localstorage";
import "./BookStore.css";

const BookStore = () => {
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
    const id = Math.floor(Math.random() * 10000);
;

    setStorageData( [...getStorageData(), { ...inputForm, id }]);
    setInputForm(initialState);
    navigate("/");
  };



  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Book Store App</h3>

      <div className="input_details">
        <label>Book Name :</label>
        <input
          type="text"
          name="name"
          value={inputForm.name}
          onChange={handleInput}
          placeholder="Enter Book Name"
        />
      </div>

      <div className="input_details">
        <label>Book Description :</label>
        <input
          type="text"
          name="desc"
          value={inputForm.desc}
          onChange={handleInput}
          placeholder="Enter Description"
        />
      </div>

      <div className="input_details">
        <label>Book Price :</label>
        <input
          type="text"
          name="price"
          value={inputForm.price}
          onChange={handleInput}
          placeholder="Enter Price"
        />
      </div>

      <div className="input_details">
        <label>Book Category :</label>
        <select name="category" value={inputForm.category} onChange={handleInput}>
          <option>Select Category</option>
          <option value="Comic">Comic</option>
          <option value="Story">Story</option>
          <option value="History">History</option>
        </select>
      </div>

      <div className="input_details">
        <label>Book Image URL :</label>
        <input
          type="text"
          name="image"
          value={inputForm.image}
          onChange={handleInput}
          placeholder="Enter Image URL"
        />
      </div>

      <button type="submit" className="btn text-light">Add Book</button>
    </form>
  );
};

export default BookStore;
