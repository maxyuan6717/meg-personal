import styled from 'styled-components';

import { Row, Text } from '../ui';

export const Splash = styled.div`
  background-color: ${({ theme }) => theme.palette['off-white']};
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  ${Text} {
    color: ${({ theme }) => theme.palette['off-black']};
  }

  .blue {
    color: ${({ theme }) => theme.palette['blue']};
  }
`;

export const SplashContent = styled.div`
  width: 800px;
  margin: 10vh 20vw;

  > :nth-child(2) {
    margin: 10px 0 25px 0;
  }
`;

export const ButtonRow = styled(Row)`
  > :not(:last-child) {
    margin-right: 8px;
  }
`;

export const Button = styled.a`
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: translateY(-6px);
    opacity: 0.5;
  }
`;
