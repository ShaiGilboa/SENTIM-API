import React, { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import Description from '../components/Description';
import Input from '../components/Input';
import Topbar from '../components/Topbar';
import { RequestStatus, Assessment } from '../types';
import AssessmentDisplay from '../components/AssessmentDisplay';
import GlobalStyle from '../GlobalStyle';

interface props {
  style?: React.CSSProperties,
  
};

const App : React.FC<PropsWithChildren<props>> = () => {

  const [requestStatue, setRequestStatus] = useState<RequestStatus>({status: 'idle'})
  const [assessment, setAssessment] = useState<Assessment | undefined>(undefined)

  const getAssessment = (text : string) => {
    if(text === '') {
      setAssessment(undefined)
    } else {
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
        .then(res => {
          setAssessment(res);
          setRequestStatus({status: 'idle'})
        })
        .catch( err => console.log('err', err))
    }
  }
  return (
    <Wrapper data-css='App'>
      <GlobalStyle />
      <Topbar 
        requestStatus={requestStatue}
        setRequestStatus={setRequestStatus}
        />
      <Content>
        <Description
          requestStatus={requestStatue}
          setRequestStatus={setRequestStatus}
          />
        <Input 
          requestStatus={requestStatue}
          setRequestStatus={setRequestStatus}
          getAssessment={getAssessment}
          />
          <AnimatePresence>
          {assessment
            ? <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                  <AssessmentDisplay assessment={assessment} />
                </motion.div>
            : null}
          </AnimatePresence>
      </Content>
      <Footer>
        <p>Created By: Shai Gilboa | <a href="https://github.com/ShaiGilboa" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://www.linkedin.com/in/shai-gilboa/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="https://github.com/ShaiGilboa/SENTIM-API" target="_blank" rel="noopener noreferrer">Repo</a></p>
      </Footer>
    </Wrapper>
  )
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 90px auto 40px;
  grid-template-areas:
    "topbar"
    "content"
    "footer";
`;

const Content = styled.div`
  grid-area: content;
  overflow: auto;
  padding-bottom: 20px;
`;

const Footer = styled.div`
  grid-area: footer;
  border-top: 1px solid black;

  p {
    /* height: 100%; */
    text-align: center;
    margin: 10px auto;
    padding: 0;
    color: black;

    a{
      text-decoration: underline;
      color: black;
    }
  }
`;
