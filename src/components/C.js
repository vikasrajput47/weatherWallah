import React from 'react';
import './UI.css'

const C = ({ weatherData }) => {
  return (
    <>
      {/* midSection */}
      <div className="midSection">
        {/* headingSecion */}
        <div className="heading">Weather of some common cities</div>

        <div className="weathers">
          {Object.entries(weatherData).map(([city, data]) => (
            <div className="containers" key={city}>
              <div className="containerHeading">
                <div className="city">{city}</div>
                <div className="temp">{data?.temp}°C</div>
              </div>
              <div className="containerContent">
                <li className="tempInfo" >min_temperature:  {data?.min_temp}°C</li>
                <li className="tempInfo">max_temperature: {data?.max_temp}°C</li>
                <li className="tempInfo">Wind-Speed: {data?.wind_speed}km/h</li>
                <li className="tempInfo">Humidity: {data?.humidity}%</li>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default C;
