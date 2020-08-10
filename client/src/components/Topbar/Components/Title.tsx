import styled from 'styled-components';

const Title = styled.h2`
  text-align: center;
  padding-top: 10px;
  font-size: 37px;
  text-transform: uppercase;
  span {
    display: none;
  }

  @media (min-width: 650px) {
    span {
      display: inline;
    }
  }
`;

export default Title;