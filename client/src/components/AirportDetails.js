import React from 'react';

const AirportDetails = ({airport}) => {
  return (
    <div>
    <div> {airport.airportName} </div>
    <div> {airport.location.longitude} </div>
    <div> {airport.location.latitude} </div>
    <div> {airport.city.timeZoneName} </div>
    <div> {airport.country.countryName} </div>

    
    <hr/>
    </div>
  )
};


export default AirportDetails;
