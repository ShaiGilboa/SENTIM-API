import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { RequestProp } from '../../types';

interface props extends RequestProp {
  style?: React.CSSProperties,
  
};

const Description : React.FC<PropsWithChildren<props>> = ({ requestStatus, setRequestStatus }) => {

  return (
    <Wrapper data-css='Description'>
      Input the text you wish to check, and using the <a href="https://sentim-api.herokuapp.com/">SENTIM-API</a> you will get a score on the sentiment:
    </Wrapper>
  )
}

export default Description;

const Wrapper = styled.p`
  width: fit-content;
  padding: 10px;
  margin: 5px auto;
  border-radius: 5px;
  text-align: center;
  color: black;
  font-size: 20px;
`;