import styled from 'styled-components';

import { Text } from '../ui';
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
    transition:
      transform 0.2s,
      box-shadow 0.2s;
    border-radius: 100%;
    overflow: hidden;
  }

  img:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 10px 0px
      ${({ theme }) => Color.makeHexTranslucent(theme.palette.black, 0.25)};
  }
`;

export const Other = styled.div`
  padding: 40px;

  > :not(:last-child) {
    margin-bottom: 350px;
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

export const WorkImage = styled.img`
  width: auto;
  height: 208px;
`;
