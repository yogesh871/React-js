import React from "react";
import ReviewItem from "./ReviewItem";

function ReviewList({ reviews }) {
  return (
    <div className="review-list">
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review, index) => (
          <ReviewItem key={index} review={review} />
        ))
      )}
    </div>
  );
}

export default ReviewList;
