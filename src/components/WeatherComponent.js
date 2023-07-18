import React, { useEffect, useState } from 'react';
import C from './C';
const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const cities = ['gurgaon', 'delhi', 'mumbai', 'chennai'];

    const fetchData = async (city) => {
      const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '739a8102c1mshbf29c7d638db798p139316jsn4fcb0f69ce03',
          'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setWeatherData((prevData) => ({
          ...prevData,
          [city]: result
        }));
      } catch (error) {
        console.error(error);
      }
    };

    cities.forEach((city) => {
      fetchData(city);
    });
  }, []);

  return (
    <div>
      <C weatherData={weatherData} />
      {
        console.log(weatherData)
      }

    </div>
  );
}

export default WeatherComponent;
