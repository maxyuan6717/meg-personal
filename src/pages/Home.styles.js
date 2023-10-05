import styled, { keyframes } from 'styled-components';

import { Column, Row, Text } from '../ui';
import { Color } from '../util';

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
  margin: 8vh 0 0 18vw;

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

export const WorksContainer = styled(Column)`
  min-height: 100vh;

  padding-top: 144px;
`;

export const Work = styled.div`
  filter: drop-shadow(0px 4px 50px rgba(0, 0, 0, 0.25));
  background-color: ${({ theme }) =>
    Color.makeHexTranslucent(theme.palette.red, 0.6)};
  cursor: pointer;
  width: 1220px;
  height: 684px;
  transition: background-color 0.2s ease-in-out;
  display: flex;

  > ${Row} {
    transition: transform 0.2s ease-in-out;
    margin: auto;
    justify-content: center;

    > :first-child {
      margin-right: 20px;
    }
  }

  &:hover {
    background-color: ${({ theme }) =>
      Color.makeHexTranslucent(theme.palette.red, 0.7)};

    > ${Row} {
      transform: scale(1.05);
    }
  }
`;

export const Phone = styled.img`
  width: 200px;
  height: auto;
`;
