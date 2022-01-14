import React, { useState } from "react";

import "./FeedBox.css";

const FeedBox = ({ url, title, text, date }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="feed-box">
      <img src={url} alt="" />
      <div className="feed-box-cont">
        <h5>{title}</h5>
        <p>{text}</p>
        <span>{date}</span>
      </div>
      <i
        className={`box-btn ${
          liked ? "fas fa-thumbs-up" : " far fa-thumbs-up"
        }`}
        onClick={() => setLiked(!liked)}
      ></i>
    </div>
  );
};
// ` box-btn far fa-thumbs-up
export default FeedBox;
