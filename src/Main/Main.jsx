import React from "react";
import "./Main.css";
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SpeedIcon from '@mui/icons-material/Speed';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
export const Main = (props) => {
  const icon_style = {
    color: "white", width: "30px", height: "30px" 
  }
  const convert_to_celsius = (temp) => {
    return ((temp-32)/1.8).toFixed(2)
  }
  const weather = props.weather;
  console.log(weather)
  return weather == null ? (
    <>
      <div className="main-container">
      <h4>No Data</h4>
      </div>
      
    </>
  ) : (
    <>
      <div className="main-container">
        <div className="mid">
          <p> {"Feels like " + convert_to_celsius(weather.main.feels_like) + " \u2103"}</p>
          <img
            id="icon"
            src={
              "http://openweathermap.org/img/wn/" +
              weather.weather[0].icon +
              "@2x.png"
            }
            alt=""
          ></img>
          <p> {"weather is currently " + weather.weather[0].description}</p>
        </div>
        <div className="vital-container">
          <div className="vitals">
              {/* temp icon */}
              <AcUnitIcon sx={icon_style}/>
            <h4> {convert_to_celsius(weather.main.temp) + " \u2103"}</h4>
          </div>
          <div className="vitals">
              {/* wind icon */}
              <SpeedIcon sx={icon_style}/>
            <h4> {weather.wind.speed + " Kmph"}</h4>
          </div>
          <div className="vitals">
              {/* pressure icon */}
              <ThermostatIcon sx={icon_style}/>
            <h4> {weather.main.pressure + " Pa"}</h4>
          </div>
          <div className="vitals">
              {/* humidity icon */}
              <WaterDropIcon sx={icon_style}/>
            <h4> {weather.main.humidity + "%"}</h4>
          </div>
        </div>
      </div>
    </>
  );
};
