import React, { useState, useEffect } from "react";
import "./NewsFeed.css";
import LineGraph from "./LineGraph";
import TimeLine from "./TimeLine";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";

function NewsFeed() {
  const [popularTopics, setTopics] = useState([
    "Technology",
    "Top Movies",
    "Upcoming Earnings",
    "Crypto",
    "Cannabis",
    "Healthcare Supplies",
    "Index ETFs",
    "Technology",
    "China",
    "Pharma",
  ]);

  const [seeds, setSeeds] = useState("");

  useEffect(() => {
    setSeeds(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <>
      <div className="newsfeed">
        <div className="newsfeed__container">
          <div className="newsfeed__chart__section">
            <div className="newsfeed_price_asset">
              <h1> $114,656,84</h1>
              <p> $142.90 (-0,12) Today </p>
            </div>
            <div className="newsfeed__chart">
              <LineGraph />
              <TimeLine />
            </div>
          </div>
          <div className="newsfeed__buying__section">
            <h2> Buying Power</h2>
            <h2> $4.11</h2>
          </div>
          <div className="newsfeed__market__section">
            <div className="newsfeed__market__box">
              <p> Markets Closed</p>
              <h1> Happy Diwali</h1>
            </div>
          </div>
          <div className="newsfeed__popularlists__section">
            <div className="newsfeed__popularlists__intro">
              <h1>Popular lists</h1>
              <p>Show More</p>
            </div>
            <div className="newsfeed_popularlists_badges">
              {popularTopics.map((topic, index) => (
                <Chip
                  key={index}
                  className="topic__badge"
                  variant="outlined"
                  label={topic}
                  avatar={
                    <Avatar
                      src={`https://api.dicebear.com/8.x/lorelei/png?${topic}`}
                    />
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsFeed;
