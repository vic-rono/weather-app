import React from 'react'

const Weather = ({ weatherData }) => {
    const { temperature, description, location, region, country, wind_speed, pressure, precip, humidity } = weatherData
    return (
        
            <div className="user-weather mb-3">
            <div className="row">
                <div className="col-md-3 weather-temp">
                    <h1>{temperature}<sup>o</sup>C , {description}</h1>
                    <h4>{location}</h4>
                    <p>{region} ,{country}</p>
                </div>

                
            </div>
            

            <div className="row">
                <div className="col-md-3 weather-info">
                    <p><b>Wind Speed</b>(km/hr)</p>
                    <h2>{wind_speed}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Pressure</b>(millibar)</p>
                    <h2>{pressure}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Precipitation</b>(mm)</p>
                    <h2>{precip}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Humidity</b>(%)</p>
                    <h2>{humidity}</h2>
                </div>

            </div>
        </div>
        
    )
}



export default Weather


    
  