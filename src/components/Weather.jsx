import React from 'react';
import TextField from "@mui/material/TextField";
const apiKey = import.meta.env.VITE_API_KEY
const Weather = () => {



	return (
    <div>
      <h1>weather</h1>
	    <TextField fullWidth label="Seach" id="fullWidth" />
    </div>
  );
};


// Погода сегодня
export default Weather;