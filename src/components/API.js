import React, { useEffect, useState } from 'react';

import "./UI.css";
const useWeatherData = (city) => {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const fetchData = async (city) => {
      const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '739a8102c1mshbf29c7d638db798p139316jsn4fcb0f69ce03',
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setWeatherData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(city);
  }, [city]);

  return weatherData;
};

const API = ({ city }) => {
  const weatherData = useWeatherData(city);
  
  return <>
<div className="mainContainerBox">
            <div className="headingCity">
               Temperature of {city}
            </div>
            <div className="cityInfo">
              <div className="cityInfoContent">
              
               <li className="cityInfoContenttopic1">Temperature</li> <div className="cityBox">
                <li className="cityInfoContenttopic2">{weatherData?.temp}°C</li>
                <li className="cityInfoContenttopic">Temp is {weatherData?.temp}°C <br /> Min Temp is {weatherData?.min_temp }°C <br /> Max temp is {weatherData?.max_temp}°C</li>
               </div>
              </div>
              <div className="cityInfoContent">
            
             <li className="cityInfoContenttopic1">Humidity Info</li> <div className="cityBox">
                <li className="cityInfoContenttopic2">{weatherData?.humidity}%</li>
                <li className="cityInfoContenttopic">Wind Degree is {weatherData?.wind_degrees} <br /> Feels like {weatherData?.feels_like} <br /> Humidity is {weatherData?.humidity}</li>
             </div>
              </div>
              <div className="cityInfoContent">
             
              <li className="cityInfoContenttopic1">Wind Info</li> <div className="cityBox">
                <li className="cityInfoContenttopic2">{weatherData?.wind_speed} km/h</li>
                <li className="cityInfoContenttopic"> Wind speed is {weatherData?.wind_speed} <br /> Sunrise time is {weatherData?.sunrise} <br /> Sunset Time is {weatherData?.sunset} </li>
              </div>
              </div>
            </div>
          </div>
       </>;
};

export default API;
