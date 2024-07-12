import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Now = ({weather}) => {
  return (
    <Container display="flex" flexDirection="row" maxWidth="xl">
        {weather && (
            <Box >
                <Box border={2} p={2}>
                    <Typography>Humidity : {weather.main.humidity}</Typography>
                    <Typography>Wind Speed : {weather.wind.speed}</Typography>
                    <Typography>Temprature :{weather.main.temp}°C</Typography>
                    <Typography>{weather.weather[0].main}</Typography>
                    <Typography>({weather.weather[0].description})</Typography>
                </Box>
            </Box>
      )}
    </Container>
  )
}

export default Now