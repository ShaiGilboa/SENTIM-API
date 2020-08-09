import styled from 'styled-components';

const Textarea = styled.textarea`
  width: 300px;
  margin: 5px auto;
  justify-self: center;
  height: 100px;
  resize: none;
  &:hover{
    cursor: text;
  }
`;

export default Textarea;