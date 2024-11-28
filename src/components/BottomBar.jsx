import React from 'react';
import { Trade } from '../svgs/Trade';
import { Task } from '../svgs/Task';
import { Explore } from '../svgs/Explore';
import { Users } from '../svgs/Users';
import { NavMenu } from '../svgs/NavMenu';

const images = [
    { img: <Trade />, class:"active" },
    { img: <Task />, class:"" },
    { img: <Explore />, class:"" },
    { img: <Users />, class:"" },
    { img: <NavMenu />, class:"" },
];

export const BottomBar = () => {
    return (
        <div className="bottom-bar-div">
            {images.map((item, index) => (
                <div key={index} className={`svg-container  ${item.class}`}>
                    {item.img}
                </div>
            ))}
        </div>
    );
};
