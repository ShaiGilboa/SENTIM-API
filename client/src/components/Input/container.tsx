import React, { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Textarea from './Components/Textarea';
import { RequestProp } from '../../types';
import Button from './Components/Button';
import { COLORS } from '../../constants';

interface props extends RequestProp {
  style?: React.CSSProperties,
  getAssessment: any,
};

const Input : React.FC<PropsWithChildren<props>> = ({ requestStatus, setRequestStatus, getAssessment }) => {

  const [text, setText] = useState<string>('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getAssessment('');
    if(text.length){
      getAssessment(text);
    } else {
      setRequestStatus({status: 'error', error: 'please enter a sentiment to check'})
    }
  } 

  return (
    <Wrapper data-css='Input'
      onSubmit={(event) => handleSubmit(event)}
    >
      <Clear
        onClick={()=>setText('')}
        whileTap={{ scale: 0.9 }}
      >X</Clear>
      <Textarea 
        value={text}
        onChange={(event)=>setText(event.target.value)}
      />
      <Button type="submit" name="submit"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >Assess
      </Button>
    </Wrapper>
  )
}

export default Input;

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: fit-content;
  margin: 0 auto;
`;

const Clear = styled(motion.div)`
  width: 20px;
  height: 20px;
  position: relative;
  color: ${COLORS.TextSecondary};
  background-color: ${COLORS.Button};
  border-radius: 50%;
  text-align: center;
  text-align: center;
  font-size: 20px;
  top: 0;
  left: calc(100% - 20px);
  padding: 3px 0 0 1px;
  margin: 2px;

  &:hover {
    cursor: pointer;
  }
`;