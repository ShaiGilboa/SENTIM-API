import React, { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import Textarea from './Components/Textarea';
import { RequestProp } from '../../types';
import Button from './Components/Button';

interface props extends RequestProp {
  style?: React.CSSProperties,
  
};

const Input : React.FC<PropsWithChildren<props>> = ({ requestStatus, setRequestStatus }) => {

  const [text, setText] = useState<string | undefined>(undefined)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('text', text)
  } 

  return (
    <Wrapper data-css='Input'
      onSubmit={(event) => handleSubmit(event)}
    >
      <Textarea 
        value={text}
        onChange={(event)=>setText(event.target.value)}
      />
      <Button type="submit" name="text">Asses</Button>
    </Wrapper>
  )
}

export default Input;

const Wrapper = styled.form`
  display: flex;
  justify-items: center;
  flex-direction: column;
`;