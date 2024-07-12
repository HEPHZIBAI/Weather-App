import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Days = ({ forecast }) => {
  return (
    <Box>
      {forecast && (
        <Grid container spacing={2}>
          {forecast.slice(0, 6).map((day, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} border={1}>
              <Typography variant="h6" textAlign="center">Day {index + 1}</Typography>
              <Typography textAlign="center">Temp: {day.main.temp}°C</Typography>
              <Typography textAlign="center">Humidity: {day.main.humidity}%</Typography>
              <Typography textAlign="center">Wind Speed: {day.wind.speed} m/s</Typography>
              <Typography textAlign="center">{day.weather[0].main}</Typography>
              <Typography textAlign="center">({day.weather[0].description})</Typography>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  )
}

export default Days
