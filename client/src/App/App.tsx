import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Description from '../components/Description';
import Input from '../components/Input';
import Topbar from '../components/Topbar';

interface props {
  style?: React.CSSProperties,
  
};

const App : React.FC<PropsWithChildren<props>> = () => {

  return (
    <Wrapper data-css='App'>
      <Topbar />
      <Description />
      <Input />
    </Wrapper>
  )
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
