import React, { PropsWithChildren } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import styled from 'styled-components';
import { Assessment } from '../../types';
import Sentence from './components/Sentence';
import Sentences from './components/Sentences';
import Summary from './components/Summary';
import { COLORS } from '../../constants';
import SectionHeader from './components/SectionHeader';

interface props {
  style?: React.CSSProperties,
  assessment: Assessment
};

const AssessmentDisplay : React.FC<PropsWithChildren<props>> = ({ assessment }) => {

  return (
      <AnimateSharedLayout>
    <Wrapper data-css='AssessmentDisplay' layout >
      <SectionHeader layout>Overall sentiment</SectionHeader>
      <Summary layout>
        <p>{assessment.sentences.length} sentences detected</p>
        <p>|</p>
        <p>{assessment.result.polarity > 0 ? assessment.result.polarity * 100 : assessment.result.polarity * -100}% {assessment.result.type} sentiment</p>
      </Summary>

      <SectionHeader layout>Sentiment detected in each sentence</SectionHeader>
      <Sentences layout initial={{ borderRadius: 25 }}>
        {assessment.sentences.map((sentence, index) => (
          <Sentence key={index} content={sentence}/>
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
`;