import React from 'react'
import "../styles/splash.css"
import {Nestus} from "../svgs/Nestus"
import Bird from "../assets/Images/hummingbird.png"
export const SplashScreen = () => {
  return (
    <div className='main-splash-box'>
        <div>
            <div className='nextus'>
                <Nestus/>
            </div>
            <div className='robo-bird'>
                <img src={Bird} alt="" />
            </div>
            <div className='buy-sell-trade'>
                <div className='buy-sell-insede-box'>
                    <p>
                        Buy, Sell & Trade
                        more efficient
                    </p>
                    <p>
                        Instantly invest in cryptocurrencies, exchange it and pay online with us
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
