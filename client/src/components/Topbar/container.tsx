import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import Title from './Components/Title';
import { RequestProp } from '../../types';

interface props extends RequestProp {
  style?: React.CSSProperties,
  
};

const Topbar : React.FC<PropsWithChildren<props>> = ({ requestStatus, setRequestStatus }) => {

  const secondary = () => {
    switch (requestStatus.status) {
      case "idle":
        return <p>waiting for text</p>
      case "error" :
        return <p>error</p>
      case "sent":
        return <p>waiting for API</p>
    }
  }

  return (
    <Wrapper data-css='Topbar'>
      <Title>Welcome to Sentiment Checker!</Title>
      <Secondary>{secondary()}</Secondary>
    </Wrapper>
  )
}

export default Topbar;

const Wrapper = styled.div`
  width: 100%;
  background-color: ${COLORS.Main};
  color: ${COLORS.Text};
`;

const Secondary = styled.div`
  text-align: center;
  height: 20px;
`