import styled from 'styled-components';
import { COLORS } from '../../../constants';

const Button = styled.button`
  background-color: ${COLORS.Main};
  width: fit-content;
  padding: 3px 5px;
  color: ${COLORS.Text};
  margin: 5px auto;
`;

export default Button;