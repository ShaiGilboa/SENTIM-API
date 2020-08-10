import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { COLORS } from '../../constants';
import Title from './Components/Title';
import { RequestProp } from '../../types';
import LoadingDots from './Components/LoadingDots';

interface props extends RequestProp {
  style?: React.CSSProperties,
  
};

const Topbar : React.FC<PropsWithChildren<props>> = ({ requestStatus, setRequestStatus }) => {

  const secondary = () => {
    switch (requestStatus.status) {
      case "idle":
        return <LoadingDots />
      case "error" :
        return <Error animate={{boxShadow: "0px 0px 2px 2px rgba(237,14,36,1), inset 0px 0px 2px 2px rgba(237,14,36,1)"}} transition={{duration: 0.7, yoyo: Infinity}}>{requestStatus.error}</Error>
      case "sent":
        return <LoadingDots />
    }
  }

  return (
    <Wrapper data-css='Topbar'>
      <Title><span>Welcome to </span>Sentiment Checker</Title>
      <Secondary>{secondary()}</Secondary>
    </Wrapper>
  )
}

export default Topbar;

const Wrapper = styled.div`
  width: 100%;
  background-color: ${COLORS.Main};
  color: ${COLORS.Text};
  grid-area: topbar;
  box-shadow: 0px 0px 5px 2px rgba(184,177,184,1), inset 0px 0px 5px 2px rgba(184,177,184,1);
  margin-top: 10px;
`;

const Secondary = styled.div`
  text-align: center;
  height: 30px;
  overflow: hidden;
`;

const Error = styled(motion.div)`
  /* color: ${COLORS.TextError}; */
  padding: 4px 2px 0px;
  margin: 5px auto;
  text-transform: uppercase;
  width: fit-content;
  /* background-color: rgba(0, 0, 0, 0.5); */
  text-align: center;
  text-justify: center;
  border-radius: 5px;
`;