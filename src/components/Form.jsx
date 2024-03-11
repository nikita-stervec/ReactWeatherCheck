import React from "react";
import Alert from "@mui/material/Alert";
const Form = ({ weatherData }) => {
  const sunriseToTime = (timestampSunrise) => {
    const sunrise = new Date(timestampSunrise * 1000);
    const formattedSunrise = sunrise.toLocaleTimeString();
    return formattedSunrise;
  };

  const sunsetToTime = (timestampSunset) => {
    const sunset = new Date(timestampSunset * 1000);
    const formattedSunset = sunset.toLocaleTimeString();
    return formattedSunset;
  };

  const timeToTime = (timestampTime) => {
    const time = new Date(timestampTime * 1000);
    const formattedTime = time.toLocaleTimeString();
    return formattedTime;
  };

  const whenBeer = (temp) => {
    if (temp > 25) {
      return (
        <Alert severity="success">
          Рекомендуем употреблять пиво исключительно на улице.
        </Alert>
      );
    } else if (temp > 15 && temp < 25) {
      return (
        <Alert severity="info">Рекомендуем употреблять пиво на районе.</Alert>
      );
    } else if (temp > 0 && temp < 15) {
      return (
        <Alert severity="warning">
          Рекомендуем употреблять пиво в домашних условиях.
        </Alert>
      );
    } else {
      return (
        <Alert severity="error">
          Рекомендуем употреблять пиво, только в домашних условиях.
        </Alert>
      );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem 3rem",
        borderRadius: "15px",
        boxShadow: "0px 0px 24px 12px rgba(34, 60, 80, 0.2)",
      }}
    >
      <h2>{weatherData.name}</h2>
      <hr style={{ width: "100%", margin: "1rem 0" }} />
      <p>Temp: {weatherData.main.temp}°C</p>
      <p>Cloud state: {weatherData.weather[0].description}</p>
      <p>Feels Like: {weatherData.main.feels_like}</p>
      <p>Sunrise: {sunriseToTime(weatherData.sys.sunrise)}</p>
      <p>Sunset: {sunsetToTime(weatherData.sys.sunset)}</p>
      <p>Day Time: {timeToTime(weatherData.dt)}</p>
      <h3 style={{ padding: "1rem 0" }}>{whenBeer(weatherData.main.temp)}</h3>
    </div>
  );
};

export default Form;
