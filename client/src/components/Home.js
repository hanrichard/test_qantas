import React, {useState} from 'react';
import {graphql} from 'react-apollo';
import query from '../queries/query-airports'
import Loader from "./Loader"
import AirportItem from "./AirportItem"
import styled from 'styled-components'
import componentStyle from './HomeStyle';
import Pagination from "react-js-pagination";
import Container from '@material-ui/core/Container';

const Home = (props) => { 
    const [activePage, setActivePage] = useState(1);
    const { error, airports, loading } = props.data;
    const Wrapper = styled.div`${componentStyle}`;

    const totalNumber = airports && airports.length;
    const pageShownNum = 50
    const pageRangeDisplayed = 5
    const currentPages = activePage * pageShownNum
    const nextPages = currentPages + pageShownNum

    const airportsList = airports && airports.slice(currentPages, nextPages).map( airport => {
        return (
          <AirportItem key={airport.airportCode} airport={airport}/>
        )
    })

    if(error) return <div>{error.message}</div>

    if(loading) return  <Loader />

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
    )
}

export default graphql(query)(Home);
