import React from "react";
import "./Search.css";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

export const Search = (props) => {
  const setWeather = props.setWeather;

  const fetchData = async (cityName) => {
    const options = {
      method: 'GET',
      url: `https://open-weather13.p.rapidapi.com/city/${cityName}`,
      headers: {
        'X-RapidAPI-Key': 'a1f351ff76msh9b3ae3408686122p14e9e8jsn6224e8595efa',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
      }
    };
    try {
      const res = await axios.request(options);
      return res;
    } catch (err) {
      throw new Error("Cannot Fetch");
    }
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const cityName = document.getElementById("search").value;
    try {
      const data = await fetchData(cityName);
      console.log(data.data);
      setWeather(data.data);
    }
    catch (err) {
      console.log(err);
    }
  };

  const button_style = {
    background: "rgba(247, 232, 232, 0.44)",
    borderRadius: "0 16px 16px 0",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(4.6px)",
    webkitBackdropFilter: "blur(4.6px)",
    border: "1px solid rgba(253, 216, 216, 0.6)",
    width: "5vw",
    padding: "1rem",
  };
  return (
    <div className="search-container">
      <input
        type="text"
        name="search-input"
        id="search"
        placeholder="Search..."
        autoComplete="false"
      />
      <IconButton
        onClick={handleClick}
        className="button"
        aria-label="search button"
        sx={button_style}
      >
        <SearchIcon sx={{ color: "white", width: "40px", height: "40px" }} />
      </IconButton>
    </div>
  );
};
