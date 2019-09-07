import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import styled from 'styled-components'
import componentStyle from './AirportItemStyle';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const AirportItem = props => { 
    const Wrapper = styled.div`${componentStyle}`;
    return (
        <Wrapper>
            <Card className="AirportList__card" >
                <Link to={`/airport/${props.airport.airportCode}`} className="AirportList__link"> 
                {props.airport.airportName} - {props.airport.country.countryName}
                <ArrowForwardIosIcon />
                </Link>
            </Card>
        </Wrapper>
    )
}

export default AirportItem;
