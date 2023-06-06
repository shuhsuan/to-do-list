import React from 'react'
import WeatherCard from './weathercard'

const WeatherList = ({weathers}) => { //weather prop to pass from App.js
    return(
        <div>
            {weathers.map(({dt, current, }) => (
                <div key={dt}>
                    {/*
                    <WeatherCard //pass weathercard props here
                    temp_max={main.temp_max}
                    temp_min={main.temp_min}
                    dt={dt*1000}
                    main={weather[0].main}
                    icon={weather[0].icon}
                    />
                    */}
                    <WeatherCard
                    summary={current.summary}
                    
                    />
                </div>
            ))}
        </div>
    )
}

export default WeatherList;