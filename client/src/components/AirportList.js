import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import AirportDetails from "./AirportDetails"
import query from '../queries/query'

class AirportList extends Component {
  render() {
    const airports = this.props.data.loading ? 
      <div>loading</div> 
      : 
      this.props.data.airports.map( airport => {
        return (<AirportDetails 
                  key={airport.airportCode}
                  airport = {airport}
                  />)
    })

    return (
      <div>airports { airports }</div>
    )
  }
}


export default graphql(query)(AirportList);
