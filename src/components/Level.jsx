import React from 'react'
import HomeScreenBG from "../assets/Images/Home_Screen_BG.jpg"
import '../App.css'
import { BottomBar } from './BottomBar'
import { BirdBox } from './BirdBox'

export const Level = () => {
  return (
    <div className='main-container'>
        <div className='main-inside-div '>   
            <BirdBox/>
            <BottomBar/>
        </div>
    </div>
  )
}
