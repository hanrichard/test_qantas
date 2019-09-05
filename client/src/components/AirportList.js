import React from 'react';
import {graphql} from 'react-apollo';
import query from '../queries/query-airports'
import { Link } from 'react-router-dom';

const AirportList = props => {
  const airports = props.data.loading ? 
    <div>loading</div> 
    : 
    props.data.airports.map( airport => {
      return (<Link 
                to={`/airport/${airport.airportCode}`}
                key={airport.airportCode}> {airport.airportName}</Link>)
  })

  return (
    <div>airports { airports }</div>
  )
}

export default graphql(query)(AirportList);
