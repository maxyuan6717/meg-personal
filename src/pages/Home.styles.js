import styled, { keyframes } from 'styled-components';

import { Column, Row, Text } from '../ui';
import { Color } from '../util';

export const Splash = styled.div`
  background-color: ${({ theme }) => theme.palette.white};
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const SplashContent = styled.div`
  display: grid;
  grid-template-columns: 144px 420px;
  column-gap: 25px;
  align-items: center;

  img {
    width: 144px;
    height: auto;
  }
`;

export const Other = styled.div`
  padding: 40px;

  > :not(:last-child) {
    margin-bottom: 300px;
  }
`;

export const Section = styled.div``;

export const SectionHeader = styled(Text)`
  margin-bottom: 20px;
`;

export const WorksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));
  gap: 20px;
`;

export const AboutMe = styled(Text)`
  max-width: 608px;
`;

export const ButtonRow = styled(Row)`
  > :not(:last-child) {
    margin-right: 8px;
  }
`;

export const Button = styled.a`
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  :hover {
    transform: translateY(-6px);
    opacity: 0.5;
  }
`;

export const MyWorkContainer = styled(Column)`
  margin: auto auto 30px auto;
  opacity: ${({ fade }) => 1 - fade};
  cursor: pointer;
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

  > :not(:last-child) {
    margin-bottom: 110px;
  }
`;

export const Work = styled.div`
  filter: drop-shadow(0px 4px 50px rgba(0, 0, 0, 0.25));
  background-color: ${({ theme, color }) =>
    Color.makeHexTranslucent(theme.palette[color], 0.6)};
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
    background-color: ${({ theme, color }) =>
      Color.makeHexTranslucent(theme.palette[color], 0.7)};

    > ${Row} {
      transform: scale(1.05);
    }
  }
`;

export const WorkImage = styled.img`
  width: auto;
  height: 208px;
`;
