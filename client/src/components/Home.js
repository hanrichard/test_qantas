import React, {useState} from 'react';
import Loader from "./Loader";
import AirportItem from "./AirportItem";
import styled from 'styled-components';
import componentStyle from './HomeStyle';
import Pagination from "react-js-pagination";
import Container from '@material-ui/core/Container';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types'; 
import { pageShownNum, pageRangeDisplayed, currentPages, nextPages, totalNumber } from "../utility/utility";

export const GET_AIRPORTS_QUERY = gql`
{
  airports {
    airportCode
    airportName
    location {
      latitude
      longitude
    }
    city {
      timeZoneName
    }
    country {
      countryName
    }
  }
}
`;

const Wrapper = styled.div`${componentStyle}`;
const Home = () => {
  const { loading, error, data } = useQuery(
    GET_AIRPORTS_QUERY
  );

  const [activePage, setActivePage] = useState(1);

  if (loading) return  <Loader />;
  if (error) return <div>{error.message}</div>;

  const airportsList = data.airports.slice(currentPages(activePage), nextPages(activePage)).map( airport => {
    return (
      <AirportItem key={airport.airportCode} airport={airport}/>
    )
  })

  return (
    <Wrapper> 
    <div className="AirportList__list">
        { airportsList }
    </div>
    
    <div className="AirportList__pagination">
      <Container maxWidth="sm">
        <Pagination
          activePage={activePage}
          itemsCountPerPage={pageShownNum}
          totalItemsCount={totalNumber(data.airports) - pageShownNum}
          pageRangeDisplayed={pageRangeDisplayed}
          onChange={(activePage)=>setActivePage(activePage)}
        />
      </Container>
    </div>
  </Wrapper>
  )
};

Home.propTypes = {
  airport: PropTypes.shape({
      airportName: PropTypes.string,
      airportCode: PropTypes.string,
      country: PropTypes.shape({
        countryName: PropTypes.string,
    })
  })
};

export default Home;

