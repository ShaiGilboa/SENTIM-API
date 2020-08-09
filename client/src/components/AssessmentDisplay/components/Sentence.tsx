import React, { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from "framer-motion";

import { AssessmentSentence } from '../../../types';
import Summary from './Summary';
import { COLORS } from '../../../constants';
import { adjustAndRound } from '../../../utils';

interface props {
  style?: React.CSSProperties,
  content: AssessmentSentence
};

const Sentence : React.FC<PropsWithChildren<props>> = ({ content }) => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleOpen = () => setIsOpen(!isOpen)
  return (
    <Wrapper data-css='Sentence' layout  >
      <AnimatePresence>
        <Summary layout onClick={toggleOpen} initial={{scale: 1}} animate={{scale: 1}}>
          {content.sentiment.polarity === 0 ? '' : adjustAndRound(content.sentiment.polarity)+'%'} {content.sentiment.type} sentiment
        </Summary>
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && <Content onClick={toggleOpen} 
                  layout
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'fit-content' }}
                  exit={{ opacity: 0, height: 0 }}>
                    {content.sentence}
                  </Content>
        }
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
  overflow: hidden;
`;

const Content = styled(motion.div)`
  color: ${COLORS.Text}
`;