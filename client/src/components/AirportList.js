import React from 'react';
import {graphql} from 'react-apollo';
import query from '../queries/query-airports'
import { Link } from 'react-router-dom';

const AirportList = props => {
  const { error, airports, loading } = props.data;

  if(error) {
    return <div>{error.message}</div>
  }
  
  const airportsList = loading ? 
    <div>loading</div> 
    : 
    airports.map( airport => {
      return (<Link 
                to={`/airport/${airport.airportCode}`}
                key={airport.airportCode}> {airport.airportName} - {airport.country.countryName}</Link>)
  })

  return (
    <div>airports { airportsList }</div>
  )
}

export default graphql(query)(AirportList);
