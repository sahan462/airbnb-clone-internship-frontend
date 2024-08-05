import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

export const PropertyCard = ({place}) => {
  return (
    <Card className="xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1 px-1 my-2">
      <CardActionArea>
        <CardMedia
          component="img"
          image={place.image}
          alt="green iguana"
          sx={{width: "100%", height: "250PX"}}
        />
        <CardContent>
          <Box display="flex" justifyContent="space-between">
            <Typography variant='body1' sx={{fontWeight: 'bold'}}>{place.location}</Typography>
            <Typography variant='body1' sx={{fontWeight: 'bold'}} display="flex" alignItems="center">
              <StarIcon />
              {place.average_rating}
            </Typography>
          </Box>
          <Typography>{place.distance}</Typography>
          <Typography>{place.dates}</Typography>
          <Typography sx={{fontWeight: 'bold'}}>Rs.{place.price_per_night},per night</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
