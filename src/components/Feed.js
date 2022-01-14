import React, { useEffect, useState } from "react";
import axios from "axios";
import FeedBox from "./FeedBox";

import "./Feed.css";

const Feed = () => {
  const url =
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=fvoBkDsn5eJwTK6Fv7gsFFnEkBymdCPmzerDdcP7";
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(9);
  const [loading, setLoading] = useState(false);

  const showMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisible((prevValue) => prevValue + 6);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    axios.get(url).then((res) => {
      setItems(res.data.photos);
    });
  }, []);

  return (
    <section className="feed">
      <h3>Explore the feed</h3>
      <div className="feed-cont">
        <div className="feed-boxes">
          {items.slice(0, visible).map((item) => (
            <FeedBox
              key={item.id}
              url={item.img_src}
              title={item.rover.name}
              text={item.camera.full_name}
              date={item.earth_date}
            ></FeedBox>
          ))}
        </div>
        {loading ? (
          <svg
            class="pl"
            viewBox="0 0 200 200"
            width="200"
            height="200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="pl-grad1" x1="1" y1="0.5" x2="0" y2="0.5">
                <stop offset="0%" stop-color="hsl(313,90%,55%)" />
                <stop offset="100%" stop-color="hsl(223,90%,55%)" />
              </linearGradient>
              <linearGradient id="pl-grad2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="hsl(313,90%,55%)" />
                <stop offset="100%" stop-color="hsl(223,90%,55%)" />
              </linearGradient>
            </defs>
            <circle
              class="pl__ring"
              cx="100"
              cy="100"
              r="82"
              fill="none"
              stroke="url(#pl-grad1)"
              stroke-width="36"
              stroke-dasharray="0 257 1 257"
              stroke-dashoffset="0.01"
              stroke-linecap="round"
              transform="rotate(-90,100,100)"
            />
            <line
              class="pl__ball"
              stroke="url(#pl-grad2)"
              x1="100"
              y1="18"
              x2="100.01"
              y2="182"
              stroke-width="36"
              stroke-dasharray="1 165"
              stroke-linecap="round"
            />
          </svg>
        ) : (
          <div></div>
        )}
        <br />
        <button className="feed-btn" onClick={showMore}>
          Show More
        </button>
      </div>
    </section>
  );
};

export default Feed;
