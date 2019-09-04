// import React from 'react';
// import { Link } from 'react-router-dom';

// const AirportItem = ({airport}) => {
//   return (
//     <Link to={`/airport/${airport.airportCode}`}>
//       <div> {airport.airportName} </div>
//       <div> {airport.location.longitude} </div>
//       <div> {airport.location.latitude} </div>
//       <div> {airport.city.timeZoneName} </div>
//       <div> {airport.country.countryName} </div>
//     </Link>
//   )
// };


// export default AirportItem;

// import React, {Component} from 'react';
// import {graphql} from 'react-apollo';
// import query from '../queries/query'


// class AirportItem extends Component {
//   render() {
//     const airports = this.props.data.loading ? 
//       <div>loading</div> 
//       : 
//       this.props.data.airports.map( airport => {
//         return (<Link 
//                   to={`/airport/${airport.airportCode}`}
//                   key={airport.airportCode}> {airport.airportName} </Link>)
//     })

//     return (
//       <div>airports { airports }</div>
//     )
//   }
// }


// export default graphql(query)(AirportItem);
