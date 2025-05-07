import { React } from "react";
import { useState, useEffect } from "react";
import "./Book.css";


const getStorageData = () => {
  const storedBooks = localStorage.getItem("books");
  if (!storedBooks) return [];
  return JSON.parse(storedBooks);
}

const BookStore = () => {

  const intsialstate = {
    name: " ",
    id: " ",
    desc: " ",
    price: " ",
    category: " ",
    image: " ",
  }
  const [inputForm, setInputForm] = useState(intsialstate);
  const [storageData, setStorageData] = useState(getStorageData())
  const [isEdit, setisEdit] = useState(false)

  const handleInput = (e) => {
    const { name, value } = e.target;

    setInputForm({
      ...inputForm,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    if (isEdit) {
      setStorageData((prevData) =>
        prevData.map((book) => book.id == inputForm.id ? inputForm : book)
      )
    }
    else {
      e.preventDefault();
      let id = Math.floor(Math.random() * 1000)
      setStorageData([...storageData, { ...inputForm, id }])
    }
    setInputForm(intsialstate);
    setisEdit(false);
  }

  const handleDelete = (id) => {
    setStorageData(storageData.filter((book) => book.id !== id))
  }

  const handleEdit = (book) => {
    setInputForm(book)
    setisEdit(true)
  }

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(storageData))
  }, [storageData])

  return (
    <>
      <form className=" form " onSubmit={handleSubmit}>
        <h3>Book Store App</h3>
        <div className="input_details">
          <label>Book Name :</label>
          <input type="text" name="name" value={inputForm.name} onChange={handleInput} />
        </div>
        <div className="input_details">
          <label>Book Description :</label>
          <input type="text" name="desc" value={inputForm.desc} onChange={handleInput} />
        </div>
        <div className="input_details">
          <label>Book Price :</label>
          <input type="text" name="price" value={inputForm.price} onChange={handleInput} />
        </div>
        <div className="input_details">
          <label> Book Category :</label>
          <select name="category" value={inputForm.category} onChange={handleInput}>
            <option value="">select Category</option>
            <option value="Comic">Comic</option>
            <option value="Story">Story</option>
            <option value="History">History</option>
          </select>
        </div>
        <div className="input_details">
          <label>Book URL :</label>
          <input type="text" name="image" value={inputForm.image} onChange={handleInput} />
        </div>
        <button type="Submit" className="btn">{isEdit ? "Update Book" : "Add Book"}</button>
      </form>

      <div className="cards">
        {storageData.map((book) => (
          <div className="card" key={book.id}>
            <div className="card-img">
              <img src={book.image} alt="book-img" />
            </div>
            <div className="card-info">
              <h1>{book.name}</h1>
              <p>{book.desc}</p>
              <div className="book-price">
                <p>{book.price}</p>
              </div>
              <div className="book-category">
                <p>{book.category} </p>
              </div>
              <div className="edit-delete-btn">
                <div className="edit-btn">
                  <button type="submit" onClick={() => handleEdit(book)}>Edit</button>
                </div>
                <div className="delete-btn">
                  <button type="submit" onClick={() => handleDelete(book.id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
export default BookStore