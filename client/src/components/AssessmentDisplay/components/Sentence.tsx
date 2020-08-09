import React, { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import { AssessmentSentence } from '../../../types';

interface props {
  style?: React.CSSProperties,
  content: AssessmentSentence
};

const Sentence : React.FC<PropsWithChildren<props>> = ({ content }) => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleOpen = () => setIsOpen(!isOpen)
  return (
    <Wrapper data-css='Sentence' layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <AnimatePresence>
      <motion.div layout>{content.sentiment.polarity > 0 ? content.sentiment.polarity * 100 : content.sentiment.polarity * -100}% {content.sentiment.type} sentiment</motion.div>
      {isOpen ? <motion.div layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      exit={{ opacity: 0 }}>{content.sentence}</motion.div> : null}</AnimatePresence>
    </Wrapper>
  )
}

export default Sentence;

const Wrapper = styled(motion.li)`

`;