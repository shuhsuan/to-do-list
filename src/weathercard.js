//functional component that receives props and displays it

import React from 'react'
import clouds from './icons/clouds.png'
import rainy from './icons/raining.png'
import cloudy from './icons/cloudy.png'
import foggy from './icons/fog.png'
import snowy from './icons/snow.png'
import stormy from './icons/storm.png'
import sunny from './icons/sun.png'
import weather from './icons/weather-news.png'
import './weathercard.css'

const WeatherCard = ({dt, temp_min, temp_max, main, icon}) => {

    const date = new Date(); // create a date object with Date class contructor
    const times = date.toLocaleTimeString();

    const getSvg = () => {

        console.log(icon)
        switch(icon){
            case "01d": return sunny;
            case "01n": return sunny;
            case "02d": return cloudy;
            case "02n": return cloudy;
            case "03d": return clouds;
            case "03n": return clouds;
            case "04d": return clouds;
            case "04n": return clouds;
            case "09d": return rainy;
            case "09n": return rainy;
            case "10d": return rainy;
            case "10n": return rainy;
            case "11d": return stormy;
            case "11n": return stormy;
            case "13d": return snowy;
            case "13n": return snowy;
            case "50d": return foggy;
            case "50n": return foggy;
            case "": return weather;
        }
    }

    return(
        <>
        <div id="card">
            <img
            variant="top" 
            src={getSvg()} //conditional erndering on the icon code 
            alt="Weather Icon here"
            id="img"
            />
            <div id="body">
                <div id="title">{main}</div>
                <p>
                    {date.toLocaleDateString()} - {times}
                </p> {/*datetime recived in milliseconds so needs to be turned to local date time*/}
                <p>
                    Max: {temp_max}
                </p>
                <p>
                    Min: {temp_min}
                </p>
            </div>
        </div>
        </>
    )
}

export default WeatherCard;