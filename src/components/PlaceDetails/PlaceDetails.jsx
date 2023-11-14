import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import { LocationOn, Phone } from "@mui/icons-material";
import React from "react";

const PlaceDetails = ({ place }) => {
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGFyYXVudHxlbnwwfHwwfHx8MA%3D%3D"
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display={'flex'} justifyContent={'space-between'}>
          <Typography variant="subtitle1">
            Price
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display={'flex'} justifyContent={'space-between'}>
          <Typography variant="subtitle1">
            Ranking
          </Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box my={1} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color={'textSecondary'}>{award.display_name}</Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} style={{ margin: '5px 5px 5px 0'}} />
        ))}
        {place.address && (
          <Typography gutterBottom variant="body2" color="textSecondary" className="flex items-center justify-between mt-[10px]">
            <LocationOn />{place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography variant="body2" color="textSecondary" className="flex items-center justify-between">
            <Phone /> {place.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
          Trip Advisor
        </Button>
        <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
          Website
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
