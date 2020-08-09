import styled from 'styled-components';
import { motion } from "framer-motion";

import { COLORS } from '../../../constants';

const Button = styled(motion.button)`
  background-color: ${COLORS.Main};
  width: fit-content;
  padding: 3px 5px;
  color: ${COLORS.Text};
  margin: 5px auto;
  border-radius: 10px;
  outline: none;

  /* &:focus {
    outline-width: 0;


    border: none;
    -moz-outline-style: none;
  }
  &:active {
    outline-width: 0;

    border: none;
    -moz-outline-style: none;
  } */
`;

export default Button;