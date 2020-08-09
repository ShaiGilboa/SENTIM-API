import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';

interface props {
  style?: React.CSSProperties,
  
};

const Description : React.FC<PropsWithChildren<props>> = () => {

  return (
    <Wrapper data-css='Description'>
      Input the text you wish to check, and using the API you will get a score on the sentiment:
    </Wrapper>
  )
}

export default Description;

const Wrapper = styled.p`
  background-color: ${COLORS.Secondary};
  color: ${COLORS.TextSecondary};
  width: fit-content;
  padding: 10px;
  margin: 5px auto;
  border-radius: 5px;
  text-align: center;
`;