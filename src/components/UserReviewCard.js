import React from 'react';

const UserReviewCard = ({ name, review, rating }) => (
  <div className="user-review-card">
    <h3>{name}</h3>
    <div className="star-rating">
      {Array.from({ length: rating }).map((_, index) => (
        <span key={index}>★</span>
      ))}
    </div>
    <p>{review}</p>
  </div>
);

export default UserReviewCard;
