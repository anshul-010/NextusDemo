import React from "react";
import "../styles/home.css";
import userIcon from "../assets/Images/profile.png";
import bellIcon from "../assets/Images/bell.png";
import settingIcon from "../assets/Images/settings.png";
import rewards from "../assets/Images/Rewards.png";
import mystery from "../assets/Images/mystery-box.png";
import coins from "../assets/Images/Scene.png";
import coin1 from "../assets/Images/coin1.png";
import Bird from "../assets/Images/hummingbird.png"
import Bitcoin4 from "../assets/Images/Bitcoin4.png"
import Bitcoin6 from "../assets/Images/Bitcoin6.png"
import { BottomBar } from "./BottomBar";
import { Trade } from '../svgs/Trade';
import { Task } from '../svgs/Task';
import { Explore } from '../svgs/Explore';
import { Users } from '../svgs/Users';
import { NavMenu } from '../svgs/NavMenu';

export const Home = () => {

    const images = [
        { img: <Trade />, class:"active" },
        { img: <Task />, class:"" },
        { img: <Explore />, class:"" },
        { img: <Users />, class:"" },
        { img: <NavMenu />, class:"" },
    ];

  return (
    <div className="home-main-box">
      <div className="home-main-inside">
        <div className="home-top-icons">
          <div className="icon-box">
            <img src={userIcon} alt="" />
          </div>
          <div className="home-right-side-icon">
            <div className="icon-box">
              <img src={bellIcon} alt="" />
            </div>
            <div className="icon-box">
              <img src={settingIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="daily-info-div">
          <div className="daily-trade">
            <div className="reward-img-box">
              <img src={rewards} alt="" />
            </div>
            <div className="daily-trade-text">
              <p>Daily Trade</p>
              <p>11:23 H</p>
            </div>
          </div>
          <div className="line"></div>
          <div className="daily-trade">
            <div className="reward-img-box">
              <img src={mystery} alt="" />
            </div>
            <div className="daily-trade-text">
              <p>Daily Quiz</p>
              <p>00:49 H</p>
            </div>
          </div>
          <div className="point-per-min">
            <div className="coins-box">
              <img src={coins} alt="" />
            </div>
            <div>
              <div className="point-text-i">
                <p>Points per minute</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                >
                  <g clip-path="url(#clip0_13_1877)">
                    <path
                      d="M4.00002 7.33329C5.84097 7.33329 7.33335 5.84091 7.33335 3.99996C7.33335 2.15901 5.84097 0.666626 4.00002 0.666626C2.15907 0.666626 0.666687 2.15901 0.666687 3.99996C0.666687 5.84091 2.15907 7.33329 4.00002 7.33329Z"
                      stroke="#A0A0A0"
                      stroke-width="0.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4 5.33333V4"
                      stroke="#A0A0A0"
                      stroke-width="0.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4 2.66663H4.00333"
                      stroke="#A0A0A0"
                      stroke-width="0.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_13_1877">
                      <rect width="8" height="8" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="k-no">33.25K</div>
            </div>
          </div>
        </div>
        <div className="point-count-div">
          <div className="coint-point">
            <img src={coin1} alt="" />
            <p>75,867,008</p>
          </div>
          <div className="level-box">
            <p>Level Name</p>
            <p>Level 1/12</p>
          </div>
          <div>
            <div className="outer-bar">
              <div className="inner-bar"></div>
            </div>
          </div>
        </div>
        <div className='home-robo-bird'>
            <img src={Bird} alt="" />
        </div>
        <div className="booster-div">
            <div className="Bitcoin4">
                <img src={Bitcoin4} alt="" />
                <p>1000/1000</p>
            </div>
            <div className="Bitcoin6">
                <img src={Bitcoin6} alt="" />
                <p>Boost</p>
            </div>
        </div>
        <div className="home-bottom-bar-div">
            {images.map((item, index) => (
                <div key={index} className={`svg-container  ${item.class}`}>
                    {item.img}
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};
