import React, { useState } from "react";
import bird from "../assets/Images/hummingbird.png";
import right from "../assets/Images/GroupRight.png";

export const BirdBox = () => {
  const data = [
    {
      title: "beginner",
      img: bird,
    },
    {
      title: "intermediate",
      img: right,
    },
    {
      title: "novice trader",
      img: right,
    },
    {
      title: "beginner",
      img: bird,
    },
    {
      title: "intermediate",
      img: bird,
    },
    {
      title: "novice trader",
      img: bird,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    // Increment index; if at the last index, go back to 0
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    // Decrement index; if at the first index, go to the last index
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="main-bird-box-slider">
      <div className="main-bird-box">
        <div className="dot-left" onClick={handlePrev}>
          <img src={right} alt="Left" style={{ transform: "rotate(180deg)" }} />
        </div>
        <div className="bird-img">
          <img src={data[currentIndex].img} alt="Current Bird" />
        </div>
        <div className="dot-right" onClick={handleNext}>
          <img src={right} alt="Right" />
        </div>
      </div>
      <div className="bar-line-div">
        <p className="beginner">{data[currentIndex].title}</p>
        <div className="outer-bar">
          <div className="inner-bar"></div>
        </div>
        <div className="number">
          <p>{`${currentIndex + 1}/${data.length}`}</p>
        </div>
      </div>
      {/* <div className="bird-slider">
        {data?.map((ele, index) => (
          <div
            key={index}
            className={`active-div ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img src={ele.img} alt="" />
            <p className="bird-text">{ele.title}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};
