import styled from 'styled-components';

const Textarea = styled.textarea`
  width: 300px;
  margin: 0px auto;
  justify-self: center;
  height: 150px;
  resize: none;
  &:hover{
    cursor: text;
  }
`;

export default Textarea;