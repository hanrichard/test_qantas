import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';
import componentStyle from './LoaderStyle';
import PropTypes from 'prop-types'; 

const Wrapper = styled.div`${componentStyle}`;
const Loader = () => {
  return (
    <Wrapper><CircularProgress size={100} /></Wrapper>
  )
};

Loader.propTypes = {
  size: PropTypes.number,
};

export default Loader;
