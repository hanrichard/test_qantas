import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import query from '../queries/query-airports'
import { Link } from 'react-router-dom';
import Loader from "./Loader"
import Card from '@material-ui/core/Card';
import styled from 'styled-components'
import componentStyle from './AirportListStyle';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Pagination from "react-js-pagination";

class AirportList extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
  }
  
  render(){
    const { error, airports, loading } = this.props.data;
    const Wrapper = styled.div`${componentStyle}`;
    const totalNumber = airports && airports.length;
    const currentPage = this.state.activePage * 100
    const nextPage = currentPage + 100

    const airportsList = airports && airports.slice(currentPage, nextPage).map( airport => {
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

    if(error) {
      return <div>{error.message}</div>
    }
    
    if(loading) {
      return <Loader />
    }

    return (
      <div> 
        { airportsList }
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={100}
          totalItemsCount={totalNumber - 100}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </div>
    )
  }
}

export default graphql(query)(AirportList);
