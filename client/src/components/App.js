import React from 'react';
import { ApolloProvider } from 'react-apollo';
import Home from "./Home"
import AirportDetails from "./AirportDetails"
import Header from "./Header"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import styled from 'styled-components'
import componentStyle from './AppStyle';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const Wrapper = styled.div`${componentStyle}`;
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/graphql'
})

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache',
    errorPolicy: 'all',
  },
  query: {
    fetchPolicy: 'cache',
    errorPolicy: 'all',
  }
};

const client = new ApolloClient({
  cache,
  link,
  defaultOptions: defaultOptions,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Wrapper>
        <Container maxWidth="sm">
          <BrowserRouter>
              <Switch>
                <Route path='/airport/:id' component={AirportDetails} />
                <Route exact path='/' component={Home} />
              </Switch>
          </BrowserRouter>
        </Container>
      </Wrapper>
    </ApolloProvider>
  )
};

export default App;
