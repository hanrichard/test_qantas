import React from 'react';
import {graphql} from 'react-apollo';
import query from '../queries/query-airport'
import { Link } from 'react-router-dom';
import Loader from "./Loader"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'
import componentStyle from './AirportDetailsStyle';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'; 

const AirportDetails = props => {
  const { airports, error, loading } = props.data;
  const Wrapper = styled.div`${componentStyle}`;
 
  if(error) return <div>{error.message}</div>

  if(loading) return  <Loader />

  const airport = airports && airports.filter(airport => {
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

          <Typography variant="body1" gutterBottom>
            <ul>
              <li>latitude: {airport.location.latitude } </li>
              <li>longitude: {airport.location.longitude } </li>
            </ul>
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom>
           TimeZone
          </Typography>

          <Typography variant="body1" >
            {airport.city.timeZoneName}
          </Typography>
        </CardContent>
      </Card>
      <Link className="airportDetail__button" to="/">
        <Button  variant="contained" color="primary" size="large" >
            Back
        </Button>
      </Link>
    </Wrapper>
  )
}

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

export default graphql(query)(AirportDetails)
