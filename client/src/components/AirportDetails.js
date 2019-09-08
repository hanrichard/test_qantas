import React from 'react';
import { Link } from 'react-router-dom';
import Loader from "./Loader";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import componentStyle from './AirportDetailsStyle';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'; 
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const Wrapper = styled.div`${componentStyle}`;
export const GET_AIRPORT_QUERY = gql`
{
  airports {
    airportCode
    airportName
    location {
      latitude
      longitude
    }
    city {
      timeZoneName
    }
    country {
      countryName
    }
  }
}
`;

const AirportDetails = (props) => {
  const { 
    loading, error, data } = useQuery(
    GET_AIRPORT_QUERY
  );

  if (loading) return  <Loader />;

  if (error) return <div>{error.message}</div>;
    
  const airport = data.airports.filter(airport => {
    return airport.airportCode === props.match.params.id
  })[0];

  return (
    <Wrapper>
    <Card className="airportDetail__card" >
      <CardContent>
        <Typography variant="h4" component="h1" gutterBottom>Airport Name: { airport.airportName }</Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Location
        </Typography>
        <ul>
          <li><Typography variant="body1" gutterBottom>latitude: {airport.location.latitude }   </Typography></li>
          <li><Typography variant="body1" gutterBottom>longitude: {airport.location.longitude } </Typography></li>
        </ul>
        <Typography variant="h5" component="h2" gutterBottom>
         TimeZone
        </Typography>

        <ul>
          <li><Typography variant="body1" >{airport.city.timeZoneName}</Typography></li>
        </ul>
      </CardContent>
    </Card>
    <Link className="airportDetail__button" to="/">
      <Button  variant="contained" color="primary" size="large" >
          Back
      </Button>
    </Link>
  </Wrapper>
  );
};

AirportDetails.propTypes = {
  airport: PropTypes.shape({
      airportName: PropTypes.string,
      location: PropTypes.shape({
        longitude: PropTypes.string,
        latitude: PropTypes.string,
      }),
      city: PropTypes.shape({
        timeZoneName: PropTypes.string,
      })
  })
};

export default AirportDetails;

