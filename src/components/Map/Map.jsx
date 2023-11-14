import { LocationOnOutlined } from "@mui/icons-material";
import { Paper, Rating, Typography, useMediaQuery } from "@mui/material";
import GoogleMapReact from "google-map-react";
import React from "react";

const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
  const isDesktop = useMediaQuery("min-width:600px");

  return (
    <div className="h-[85vh] w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAcfsk4C5rdqDe-TAtNFEQjcC6Vsak-zu4" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      >
        {places?.map((place, i) => (
          <div
            key={i}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-1 hover:z-2"
          >
            { !isDesktop ? (
              <LocationOnOutlined color="primary" fontSize="large" />
            ) : (
              <Paper
                elevation={3}
                className="p-10 flex flex-col justify-center w-100"
              >
                <Typography>{place.name}</Typography>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                >
                  {" "}
                  {place.name}
                </Typography>
                <img
                  className="cursor-pointer"
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGFyYXVudHxlbnwwfHwwfHx8MA%3D%3D"
                  }
                  alt={place.name}
                />
                <Rating
                  name="read-only"
                  size="small"
                  value={Number(place.rating)}
                  readOnly
                />
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
