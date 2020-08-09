import React, { PropsWithChildren } from 'react';
import { motion, AnimateSharedLayout } from "framer-motion";

import styled from 'styled-components';
import { Assessment } from '../../types';
import Sentence from './components/Sentence';
import Sentences from './components/Sentences';
import Summary from './components/Summary';
import { COLORS } from '../../constants';
import SectionHeader from './components/SectionHeader';
import { adjustAndRound } from '../../utils';

interface props {
  style?: React.CSSProperties,
  assessment: Assessment
};

const AssessmentDisplay : React.FC<PropsWithChildren<props>> = ({ assessment }) => {

  return (
      <AnimateSharedLayout>
    <Wrapper data-css='AssessmentDisplay'  >
        <SectionHeader layout>Overall sentiment</SectionHeader>
        <Summary>
          <div >{assessment.sentences.length} sentences detected</div>
          <div >{assessment.result.polarity === 0 ? '' : adjustAndRound(assessment.result.polarity)+'%'} {assessment.result.type} sentiment</div>
        </Summary>

        <SectionHeader layout>Sentiment detected in each sentence</SectionHeader>
        <Sentences initial={{ borderRadius: 25 }}>
          {assessment.sentences.map((sentence, index) => (
            <Sentence key={index+(new Date()).getTime()} content={sentence}/>
          ))}
        </Sentences>
      </Wrapper>
    </AnimateSharedLayout>
  )
}

export default AssessmentDisplay;

const Wrapper = styled(motion.div)`
  width: 350px;
  margin: 5px auto;
  text-align: center;
  background-color: ${COLORS.Background};
  color: ${COLORS.Text};
  border-radius: 10px;
  padding: 10px;
  overflow: hidden;
  font-size: 20px;
  -webkit-box-shadow: 0px 0px 17px 2px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 17px 2px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 17px 2px rgba(0,0,0,0.75);
`;