import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import "./SearchBox.css";

export default function SerachBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  let API_KEY = "2437943558a3f677e61554aaf16c765e";
  let API_URL = "https://api.openweathermap.org/data/2.5/weather";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonresponse = await response.json();
      console.log(jsonresponse);
      let result = {
        city: city,
        temp: jsonresponse.main.temp,
        tempMin: jsonresponse.main.temp_min,
        tempMax: jsonresponse.main.temp_max,
        humidity: jsonresponse.main.humidity,
        feelsLike: jsonresponse.main.feels_like,
        weather: jsonresponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };
  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Weather App</h1>
        <TextField
          className="searchBar"
          id="City"
          label="City Name"
          value={city}
          variant="outlined"
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <Button
          className="search"
          type="submit"
          variant="contained"
          startIcon={<SearchIcon />}
        >SEARCH</Button>
        {error && <p style={{ color: "red" }}>No such place exist!</p>}
      </form>
    </>
  );
}
