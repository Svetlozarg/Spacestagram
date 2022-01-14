import React, { useState, useEffect } from "react";
import axios from "axios";

import "./DailyImage.css";

const DailyImage = () => {
  const url =
    "https://api.nasa.gov/planetary/apod?api_key=fvoBkDsn5eJwTK6Fv7gsFFnEkBymdCPmzerDdcP7";
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, [url]);

  if (data) {
    return (
      <section className="daily-image">
        <img src={data.url} alt="" />
        <div className="daily-image-cont">
          <h3>{data.title}</h3>
          <p>{data.explanation}</p>
          <p className="daily-date">{data.date}</p>
        </div>
      </section>
    );
  }

  return <div></div>;
};

export default DailyImage;
