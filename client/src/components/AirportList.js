import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import query from '../queries/query'
import { Link } from 'react-router-dom';


class AirportList extends Component {
  render() {
    const airports = this.props.data.loading ? 
      <div>loading</div> 
      : 
      this.props.data.airports.map( airport => {
        return (<Link 
                  to={`/airport/${airport.airportCode}`}
                  key={airport.airportCode}> {airport.airportName} </Link>)
    })

    console.log(this.props)

    return (
      <div>airports { airports }</div>
    )
  }
}


export default graphql(query)(AirportList);
