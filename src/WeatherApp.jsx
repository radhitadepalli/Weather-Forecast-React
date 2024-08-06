import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox.jsx";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "WonderLand",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });
  
  let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App By Radhi</h1>
      <SearchBox updateInfo={updateInfo}/>
      <br />
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
