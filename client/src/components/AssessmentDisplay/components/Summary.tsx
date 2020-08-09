import styled from 'styled-components';
import { motion } from 'framer-motion';

const Summary = styled(motion.div)`
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  width: fit-content;
  height: fit-content;
  border-radius: 10px;
  margin: 5px auto;

  div {
    margin: 5px;
    padding: 0;
  }
  p {
    margin: 5px;
    padding: 0;
  }
`;

export default Summary;