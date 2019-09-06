import React from 'react';
import {graphql} from 'react-apollo';
import query from '../queries/query-airports'
import { Link } from 'react-router-dom';
import Loader from "./Loader"
import Card from '@material-ui/core/Card';
import styled from 'styled-components'
import componentStyle from './AirportListStyle';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const AirportList = props => {
  const { error, airports, loading } = props.data;
  const Wrapper = styled.div`${componentStyle}`;

  if(error) {
    return <div>{error.message}</div>
  }
  
  if(loading) {
    return <Loader />
  }

  const airportsList = airports.map( airport => {
      return (
          <Wrapper key={airport.airportCode} >
            <Card>
                <Link to={`/airport/${airport.airportCode}`} className="AirportList__link"> 
                  {airport.airportName} - {airport.country.countryName}
                  <ArrowForwardIosIcon />
                </Link>
            </Card>
          </Wrapper>
      )
  })

  return (
    <div> 
      { airportsList }
    </div>
  )
}

export default graphql(query)(AirportList);
