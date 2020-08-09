import React, { PropsWithChildren } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import styled from 'styled-components';
import { Assessment } from '../../types';
import Sentence from './components/Sentence';
import Sentences from './components/Ul';

interface props {
  style?: React.CSSProperties,
  assessment: Assessment
};

const AssessmentDisplay : React.FC<PropsWithChildren<props>> = ({ assessment }) => {

  return (
    <Wrapper data-css='AssessmentDisplay'>
      <p>{assessment.sentences.length} sentences detected</p>
      <p>{assessment.result.polarity > 0 ? assessment.result.polarity * 100 : assessment.result.polarity * -100}% {assessment.result.type} sentiment</p>

      <AnimateSharedLayout>
      <Sentences layout initial={{ borderRadius: 25 }}>
        {assessment.sentences.map((sentence, index) => (
          <Sentence key={index} content={sentence}/>
        ))}
      </Sentences>
    </AnimateSharedLayout>
    </Wrapper>
  )
}

export default AssessmentDisplay;

const Wrapper = styled.div`

`;