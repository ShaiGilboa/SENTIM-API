import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import Title from './Components/Title';

interface props {
  style?: React.CSSProperties,
  
};

const Topbar : React.FC<PropsWithChildren<props>> = () => {

  return (
    <Wrapper data-css='Topbar'>
      <Title>Welcome to Sentiment Checker!</Title>
    </Wrapper>
  )
}

export default Topbar;

const Wrapper = styled.div`
  width: 100%;
  background-color: ${COLORS.Main};
  color: ${COLORS.Text};
`;