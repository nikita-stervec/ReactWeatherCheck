import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;
import Button from "@mui/material/Button";
import Form from "./Form.jsx"

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [history, setHistory] = useState([])

  const getWeather = async (city) => {
    console.log(weatherData);
    const baseUrl = "http://api.openweathermap.org/data/2.5/weather";
    const params = {
      q: city,
      appid: apiKey,
      units: "metric",
    };

    try {
      const response = await axios.get(baseUrl, { params });
      return response.data; // Return only the data from the response
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
      throw error;
    }
  };

  const fetchWeatherData = async () => {
    try {
      const data = await getWeather(inputValue);
      setWeatherData(data);
    } catch (error) {
      console.error("Ошибка при получении данных о погоде:", error);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ padding: "1rem 1rem", gap: "1rem" }}>
      <h1 style={{ paddingBottom: "1rem" }}>Узнать погоду</h1>
      <TextField

        value={inputValue}
        onChange={handleInputChange}
        fullWidth
        label="Введите Ваш город"
        style={{borderRadius: "15px"}}
        id="fullWidth"
      />

      <Button
        variant="contained"
        fullWidth
        style={{
          margin: "1rem 0",
          borderRadius: "15px",
        }}
        onClick={fetchWeatherData}
      >
        Найти
      </Button>

      {weatherData && <Form weatherData={weatherData} />}
    </div>
  );
};

export default Home;
