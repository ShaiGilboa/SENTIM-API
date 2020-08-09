import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS } from '../../../constants';

interface props {
  style?: React.CSSProperties,
  
};

const LoadingDots : React.FC<PropsWithChildren<props>> = () => {

  return (
    <Wrapper data-css='LoadingDots'>
      <Dot animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{yoyo: Infinity, duration: 1.5}}
      />
      <Dot animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{ yoyo: Infinity, delay: 1, duration: 1.5 }}
      />
      <Dot animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{ yoyo: Infinity, delay: 1.5, duration: 1.5}}
      />
    </Wrapper>
  )
}

export default LoadingDots;

const Wrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

const Dot = styled(motion.div)`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${COLORS.Text};
  margin: 5px;
`;