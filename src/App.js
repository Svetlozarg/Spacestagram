import react, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import DailyImage from "./components/DailyImage";
import Feed from "./components/Feed";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loading-cont">
          <div class="container">
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
            <p>Loading Spacestagram Universe...</p>
          </div>
        </div>
      ) : (
        <div>
          <Header />
          <Hero />
          <DailyImage />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
