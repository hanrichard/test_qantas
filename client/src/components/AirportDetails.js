import React from 'react';
import {graphql} from 'react-apollo';
import query from '../queries/query-airport'
import { Link } from 'react-router-dom';

const AirportDetails = props => {
  const { airports, error } = props.data;
 
  if(error) {
    return <div>{error.message}</div>
  }

  if(!airports) {
      return <div>loading</div>
  }

  const airport = airports && airports.filter(airport => {
    return airport.airportCode === props.match.params.id
  })[0];

  console.log(airport)
        
  return (
    <div>
      <div>{props.match.params.id}</div>
      <div>{airport.location.latitude }</div>
      <div>{airport.location.longitude}</div>
      <div>{airport.city.timeZoneName}</div>
      <hr />
      <Link to="/">Back</Link>
    </div>
  )
}

export default graphql(query)(AirportDetails)
