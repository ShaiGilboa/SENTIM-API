import React, { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import { AssessmentSentence } from '../../../types';
import Summary from './Summary';
import { COLORS } from '../../../constants';

interface props {
  style?: React.CSSProperties,
  content: AssessmentSentence
};

const Sentence : React.FC<PropsWithChildren<props>> = ({ content }) => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleOpen = () => setIsOpen(!isOpen)
  return (
    <Wrapper data-css='Sentence' layout  initial={{ borderRadius: 10 }}>
      <AnimatePresence>
        <Summary layout onClick={toggleOpen}>{content.sentiment.polarity > 0 ? content.sentiment.polarity * 100 : content.sentiment.polarity * -100}% {content.sentiment.type} sentiment</Summary>
        {isOpen ? <Content onClick={toggleOpen} 
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  exit={{ opacity: 0 }}>
                    {content.sentence}
                  </Content>
              : null}
        </AnimatePresence>
    </Wrapper>
  )
}

export default Sentence;

const Wrapper = styled(motion.li)`
  padding: 5px;
  div:hover {
    cursor: pointer;
  }
  margin: 5px;
`;

const Content = styled(motion.div)`
  color: ${COLORS.Text}
`;