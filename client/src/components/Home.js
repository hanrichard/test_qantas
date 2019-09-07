import React, {useState} from 'react';
import Loader from "./Loader"
import AirportItem from "./AirportItem"
import styled from 'styled-components'
import componentStyle from './HomeStyle';
import Pagination from "react-js-pagination";
import Container from '@material-ui/core/Container';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types'; 

export const GET_AIRPORTS_QUERY = gql`
{
  airports {
    airportName
    country {
        countryName
    }
    airportCode
  }
}
`;

const Home = () => {
  const { loading, error, data } = useQuery(
    GET_AIRPORTS_QUERY
  );

  const [activePage, setActivePage] = useState(1);

  if (loading) return  <Loader />;
  if (error) return <div>{error.message}</div>;

  const Wrapper = styled.div`${componentStyle}`;
  const totalNumber = data.airports && data.airports.length;
  const pageShownNum = 50
  const pageRangeDisplayed = 5
  const currentPages = activePage * pageShownNum
  const nextPages = currentPages + pageShownNum

  const airportsList = data.airports && data.airports.slice(currentPages, nextPages).map( airport => {
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
          totalItemsCount={totalNumber - pageShownNum}
          pageRangeDisplayed={pageRangeDisplayed}
          onChange={(activePage)=>setActivePage(activePage)}
        />
      </Container>
    </div>
  </Wrapper>
  );
}

Home.propTypes = {
  airport: PropTypes.shape({
      airportName: PropTypes.string,
      airportCode: PropTypes.string,
      country: PropTypes.shape({
        countryName: PropTypes.string,
      })
  })
};

export default Home

