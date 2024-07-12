import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import Days from "./Days"
import Chart from "./Chart"
import Now from './Now'

const Content = ({weather,forecast,error}) => {
  return (
    <Box pt={10} >
      <Container maxWidth="xl" maxHeight="xl">
        <Typography  variant='h3' sx={{textTransform:"uppercase",textAlign:"center"}}>{weather.name}</Typography>        
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Box flex={1} pt={3}>
            <Now weather={weather}/>
          </Box>
          <Box flex={3} spacing={2} pt={3}>
            <Days forecast={forecast}/>
            <Chart forecast={forecast} />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default Content