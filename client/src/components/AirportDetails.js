import React from 'react';
import {graphql} from 'react-apollo';
import query from '../queries/query-airport'
import { Link } from 'react-router-dom';

const AirportDetails = props => {
  const { airport } = props.data;

  if(!airport) {
      return <div>loading</div>
  }
        
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

export default graphql(query, {
  options: (props)=> {
      return {variables: {id: props.match.params.id}}
  }
})(AirportDetails)
