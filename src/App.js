import './App.css';
import { CssBaseline, Grid } from '@mui/material';
import { Header, List, Map} from './components'
import { useEffect, useState } from 'react';
import { getDataPlaces } from './api/api'

function App() {
  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({})

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, [])
  

  useEffect(() => {
    getDataPlaces( bounds.sw, bounds.ne ).then((data) => {
      setPlaces(data)
    })
  }, [coordinates, bounds])
  

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
          <Grid item xs={12} md={4}>
            <List places = {places} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map setCoordinates = {setCoordinates} setBounds = {setBounds} coordinates = {coordinates} places={places} />
          </Grid>
      </Grid>
    </>
  );
}

export default App;
