import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { locations as cardLocations } from 'data/Json';
import CarouselCard from './CarouselCard';

const LocationCards = () => {
  const [cards] = React.useState(cardLocations);
  if (!cards.length) {
    return null;
  }
  return (
    <Box sx={{ mx: 5 }}>
      <Grid container rowSpacing={1} columnSpacing={1}>
        {cards.map((location) => {
          return (
            <Grid key={location.id} item xs={12} sm={2} md={4} lg={3}>
              <CarouselCard location={location} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default LocationCards;
