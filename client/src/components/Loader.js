import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components'
import componentStyle from './LoaderStyle';


const Loader = () => {
  const Wrapper = styled.div`${componentStyle}`;
  
  return (
    <Wrapper><CircularProgress size={100} /></Wrapper>
  )
}

export default Loader;
