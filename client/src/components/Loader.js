import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components'
import componentStyle from './LoaderStyle';
import PropTypes from 'prop-types'; 

const Loader = () => {
  const Wrapper = styled.div`${componentStyle}`;
  
  return (
    <Wrapper><CircularProgress size={100} /></Wrapper>
  )
}

Loader.propTypes = {
  size: PropTypes.number,
};

export default Loader;
