import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { PlaceDetails } from '../../components'


const List = ({ places }) => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  

  return (
    <div className="p-[25px] w-full">
      <Typography variant="h4">
        Restaurants, Hotels & Attractions around you
      </Typography>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, marginBottom: '30px' }}>
          <InputLabel id={type}>Type</InputLabel>
          <Select
            id="type"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="attractions">Attractions</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id={rating}>Rating</InputLabel>
          <Select
            id="rating"
            value={rating}
            onChange={(e) => {
              setRating(e.target.value);
            }}
          >
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>Above 3.0</MenuItem>
            <MenuItem value={4}>Above 4.0</MenuItem>
            <MenuItem value={4.5}>Above 4.5</MenuItem>
          </Select>
        </FormControl>
        <Grid container spacing={3} className="h-[75vh] overflow-auto">
            {places?.map((place, i) => (
              <Grid item xs={12} key={i}>
                <PlaceDetails place={place} />
              </Grid>
            ))}
        </Grid>
    </div>
  );
};

export default List;
