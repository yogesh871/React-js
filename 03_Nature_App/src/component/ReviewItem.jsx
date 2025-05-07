import React from "react";

function ReviewItem({ review }) {
  const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);

  return (
    <div className="review-item">
      <h4>{review.username}</h4>
      <p>{review.text}</p>
      <div className="stars">{stars}</div>
    </div>
  );
}

export default ReviewItem;
