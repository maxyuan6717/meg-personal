import styled, { keyframes } from 'styled-components';

import { Column, Row, Text } from '../ui';

export const Splash = styled.div`
  background-color: ${({ theme }) => theme.palette['off-white']};
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  svg {
    fill: ${({ theme }) => theme.palette['off-black']};
  }
`;

export const SplashContent = styled.div`
  width: 800px;
  margin: 10vh 0 0 20vw;

  > :nth-child(2) {
    margin: 10px 0 25px 0;
  }

  ${Text} {
    color: ${({ theme }) => theme.palette['off-black']};
  }

  .blue {
    color: ${({ theme }) => theme.palette['blue']};
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

export const MyWorkContainer = styled(Column)`
  margin: auto auto 30px auto;
`;
// animation to bob arrow up and down
const bob = keyframes`
  0% {
    transform: translateY(5px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(5px);
  }
`;

export const DownArrow = styled.div`
  display: flex;
  animation: ${bob} 4s ease-in-out infinite;
`;
