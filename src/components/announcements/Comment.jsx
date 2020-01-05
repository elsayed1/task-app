import React from "react";

const Comment = ({ image, name, subject, comment }) => {
  return (
    <div className="comment">
      <div className="left">
        <img src={image} alt="avatar" />
        <div>
          <h5>{name}</h5>
          <p>{subject}</p>
        </div>
      </div>

      <div className="right">
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
