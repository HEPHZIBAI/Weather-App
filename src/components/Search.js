import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import Weathervideo from "../asserts/weather.mp4";
import Content from "./Content";

const Search = () => {
  const api = {
    key: "49c8bfc9bec8f24280e2887abf33145b",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState("");
  

  const handleSearch = async () => {
    
    setError("");
    try {
      const weatherResponse = await fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`);
      if (!weatherResponse.ok) throw new Error("Failed to fetch weather data.");
      const weatherData = await weatherResponse.json();
      setWeather(weatherData);
      console.log(weatherData)
      
      const forecastResponse = await fetch(`${api.base}forecast?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&appid=${api.key}&units=metric`);
      if (!forecastResponse.ok) throw new Error("Failed to fetch forecast data.");
      const forecastData = await forecastResponse.json();
      setForecast(forecastData.list);
      console.log(forecastData.list);
      setSearch("");
      
    } catch (err) {
      setError("An error occurred while fetching the weather data.");
      console.error(err);
    }
  };

  return (
      <Box >
        <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={Weathervideo} type="video/mp4" />
      </video>
        <Box pb={50} pt={30} display="flex" flexDirection="row" alignItems="center" justifyContent="center" >
          <TextField size="small" label="Enter City Name" variant="outlined" onChange={(e) => setSearch(e.target.value)}/>
            {search.length < 3 ? (
              <Button variant="contained" size="large" disabled>
                Search
              </Button>
              ) : (
              <a href="#me"><Button variant="contained" size="large" onClick={handleSearch}>
                Search
              </Button></a>
            )}
        </Box>
      <Box id="me" mt={2}>
        {/* {console.log(weather,forecast,error)} */}
        {weather &&(<Content weather={weather} forecast={forecast} error={error}/>
      )}
        </Box>
      </Box>
  );
};

export default Search;
