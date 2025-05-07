// import React from 'react';
// import List from "./component/list";
// import './App.css'

// function App() {
//   return (
//     <div class="App">
//       {/* <List /> */}
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import ReviewForm from "./component/ReviewForm";
import ReviewList from "./component/ReviewList";
import "./App.css";

function App() {
  const [reviews, setReviews] = useState([]);

  const addReview = (newReview) => {
    setReviews([newReview, ...reviews]);
  };

  return (
    <div className="app-container">
      <h1>Leave a Review</h1>
      <ReviewForm onAddReview={addReview} />
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default App;
