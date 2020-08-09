import React, { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import Textarea from './Components/Textarea';

interface props {
  style?: React.CSSProperties,
  
};

const Input : React.FC<PropsWithChildren<props>> = () => {

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
      <button type="submit" name="text"
        // onClick={(event : any) => handleSubmit(event)}
      >Asses</button>
    </Wrapper>
  )
}

export default Input;

const Wrapper = styled.form`
  display: flex;
  justify-items: center;
`;