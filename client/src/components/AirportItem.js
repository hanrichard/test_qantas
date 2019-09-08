import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import componentStyle from './AirportItemStyle';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PropTypes from 'prop-types'; 

const Wrapper = styled.div`${componentStyle}`;
const AirportItem = props => { 
  return (
    <Wrapper>
      <Card className="AirportList__card" >
        <Link to={`/airport/${props.airport.airportCode}`} className="AirportList__link"> 
          <span>
            <span className="AirportList__link-airportName">{props.airport.airportName}</span> 
              -       
            <span className="AirportList__link-countryName">{props.airport.country.countryName}</span> 
          </span>
          <ArrowForwardIosIcon />
        </Link>
      </Card>
  </Wrapper>
  )
};

AirportItem.propTypes = {
  airport: PropTypes.shape({
    airportName: PropTypes.string,
    airportCode: PropTypes.string,
    country: PropTypes.shape({
      countryName: PropTypes.string,
    })
  })
};

export default AirportItem;
