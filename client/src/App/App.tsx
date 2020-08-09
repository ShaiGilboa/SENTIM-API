import React, { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import Description from '../components/Description';
import Input from '../components/Input';
import Topbar from '../components/Topbar';
import { RequestStatus } from '../types';

interface props {
  style?: React.CSSProperties,
  
};

const App : React.FC<PropsWithChildren<props>> = () => {

  const [requestStatue, setRequestStatus] = useState<RequestStatus>({status: 'idle'})
  const [assessment, setAssessment] = useState<string | undefined>(undefined)

  const getAssessment = (text : string) => {
    setRequestStatus({
      status: "sent"
    })
    const body = {text}
    fetch('https://sentim-api.herokuapp.com/api/v1/', {
      method: "POST",
      headers: {
        Accept: "application/josn",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(res => console.log('res', res))
      .catch( err => console.log('err', err))
  }
  return (
    <Wrapper data-css='App'>
      <Topbar 
        requestStatus={requestStatue}
        setRequestStatus={setRequestStatus}
        />
      <Description
        requestStatus={requestStatue}
        setRequestStatus={setRequestStatus}
        />
      <Input 
        requestStatus={requestStatue}
        setRequestStatus={setRequestStatus}
        getAssessment={getAssessment}
        />
        {assessment
          ? <p>{assessment}</p>
          : <p>info</p>}
    </Wrapper>
  )
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
