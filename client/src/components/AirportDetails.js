import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import query from '../queries/query'


class AirportDetails extends Component {
  render() {
    const airports = this.props.data.loading ? 
      <div>loading</div> 
      : 
      this.props.data.airports.map( airport => {
        return (<div 
                  to={`/airport/${airport.airportCode}`}
                  key={airport.airportCode}> {airport.airportName} </div>)
    })

    return (
      <div>airports { airports }</div>
    )
  }
}


export default graphql(query)(AirportDetails);



