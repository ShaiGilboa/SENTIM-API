import styled from 'styled-components';
import { motion } from "framer-motion";

import { COLORS } from '../../../constants';

const Button = styled(motion.button)`
  background-color: ${COLORS.Button};
  width: fit-content;
  padding: 3px 5px;
  color: ${COLORS.Text};
  margin: 5px auto;
  border-radius: 10px;
  outline: none;
  border: none;
  font-size: 20px;
`;

export default Button;