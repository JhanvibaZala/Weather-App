import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css"; // New

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 37.25,
    humidity: 14,
    temp: 39.53,
    tempMax: 39.53,
    tempMin: 39.53,
    weather: "clear sky",
  });

  let updateInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <>
        {/* <h1>Weather App</h1> */}
      <div className="weather-container">
        <SearchBox updateInfo={updateInfo} />
        {weatherInfo && weatherInfo.city && <InfoBox Info={weatherInfo} />}
      </div>
    </>
  );
}
