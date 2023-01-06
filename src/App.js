import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { fetchCountries } from './api';

import covidLogo from "./covid.png";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("turkey");
  useEffect(() => {
    const fetchCountriesData = async () => {
      const countries = await fetchCountries();
      setCountries(countries);
    };
    fetchCountriesData();
  }, [])
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container>
          <img src={covidLogo} alt="Covid 19" style={{
            marginTop:15
          }} />
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;