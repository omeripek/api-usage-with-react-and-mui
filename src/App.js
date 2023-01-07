import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { fetchCountries } from './api';
import AreaChart from './components/AreaChart';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
        <Grid container sx= {{ mb: 4}}>
          <img src={covidLogo} alt="Covid 19" style={{
            marginTop:15
          }} />
        

        <FormControl sx={{ mt: 4, ml:5, minWidth: 300 }} size="medium">
          <Select
            labelId="countries"
            id="countries"
            value={country}
            label="country"
            onChange={(event) => setCountry(event.target.value)}
          >
            {
              countries.map(country => (
                <MenuItem value={country.Slug}>{country.Country}</MenuItem>
              ))
            }
            
          </Select>
        
      </FormControl>
      </Grid>
        
        <Grid item xs={12}>
              <AreaChart />
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;