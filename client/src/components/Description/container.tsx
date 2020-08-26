import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { RequestProp } from '../../types';

interface props extends RequestProp {
  style?: React.CSSProperties,
  
};

const Description : React.FC<PropsWithChildren<props>> = ({ requestStatus, setRequestStatus }) => {

  return (
    <Wrapper data-css='Description'>
      <p>Input the text you wish to check, and get a score on the sentiment:</p>
      <p>Using: <a href="https://sentim-api.herokuapp.com/" target="_blank" rel="noopener noreferrer">SENTIM-API</a> <span>Developed by: <a href="https://github.com/sharadcodes/" target="_blank">Sharad Raj</a></span></p>
       
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

  a {
    text-decoration: underline;
    color: black;
  }

  span {
    font-style: italic;
    font-size: 16px;
    color: black;
  }
  
  p{
    color: #000;
  }
`;