//functional component that receives props and displays it

import React from 'react'
import clouds from './icons/clouds.png'
import rainy from './icons/raining.png'
import cloudy from './icons/cloudy.png'
import foggy from './icons/fog.png'
import snowy from './icons/snow.png'
import stormy from './icons/storm.png'
import sunny from './icons/sun.png'
import moon from "./icons/moon.png"
import cloudynight from "./icons/cloudy night.png"
import thundernight from "./icons/rain night thunder.png"
import rainnight from "./icons/rain night.png"
import snowshowernight from "./icons/snow shower.png"
import rainandsnownight from "./icons/rain and snow night.png"
import freezingnight from "./icons/freezing night.png"
import unknown from "./icons/unknown.png"
import overcast from "./icons/overcast.png"
import rainandsnow from "./icons/rain and snow.png"

import './weathercard.css'

const WeatherCard = ({summary, icon, temp, feels, uv, windspeed}) => {

    const date = new Date(); // create a date object with Date class contructor
    //const times = date.toLocaleTimeString();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const pic = {
        1: unknown,
        2: sunny,
        3: cloudy,
        4: cloudy,
        5: clouds,
        6: clouds,
        7: overcast,
        8: overcast,
        9: foggy,
        10: rainy,
        11: rainy,
        12: rainy,
        13: rainy,
        14: stormy,
        15: stormy,
        16: snowy,
        17: snowy,
        18: snowy,
        19: snowy,
        20: rainandsnow,
        21: rainandsnow,
        22: rainandsnow,
        23: rainy,
        24: rainy,
        25: rainy,
        26: moon,
        27: moon,
        28: cloudynight,
        29: cloudynight,
        30: cloudynight,
        31: cloudynight,
        32: rainnight,
        33: thundernight,
        34: snowshowernight,
        35: rainandsnownight,
        36: freezingnight
    }

    return(
        <>
        <div id="card">

           <img
            variant="top" 
            src= {pic[icon]} //conditional erndering on the icon code 
            alt="Weather Icon here"
            id="img"/>

        <div id="body">

            <div id="title">{summary}</div>
            <div>{day} - {month} - {year}</div>

        </div>

        </div>
        </>
    )
}

export default WeatherCard;