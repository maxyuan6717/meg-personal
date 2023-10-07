import styled from 'styled-components';

import { Column, Row, Text } from '../ui';
import { Color } from '../util';

export const Header = styled(Row)`
  width: 100%;
  padding: 150px 0;
  background-color: ${({ theme }) =>
    Color.makeHexTranslucent(theme.palette.red, 0.7)};
  justify-content: center;

  > :first-child {
    margin-right: 20px;
  }
`;

export const Phone = styled.img`
  width: 230px;
  height: auto;
`;

export const Content = styled(Column)`
  margin: 0 auto;
  width: 100%;
  max-width: 1074px;
  display: flex;
  flex-direction: column;

  > * {
    width: 100%;
  }
`;

export const IntroSection = styled(Row)`
  padding: 60px 80px 0 80px;
  margin-bottom: -20px;
  justify-content: space-between;
  align-items: flex-start;

  > * {
    max-width: 500px;
    > :first-child {
      font-weight: 500;
      margin-bottom: 20px;
    }
  }
`;

export const SectionDivider = styled.div`
  border-top: 1px solid ${({ theme }) => theme.palette.border};
  padding: 30px 0;
  margin-top: 80px;
  font: ${({ theme }) => theme.textStyles.desktop['text-t5']};
  font-weight: 500;
`;

export const SectionTitle = styled.div`
  margin-bottom: 30px;
  font: ${({ theme }) => theme.textStyles.desktop['text-t1']};
  font-weight: 700;
`;

export const ProblemQuestion = styled(Text)`
  margin-top: 80px;
  padding: 0 145px;
  font-weight: 700;
  text-align: center;
  position: relative;

  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 250px;
    font-weight: 700;
    color: ${({ theme }) => theme.palette.red};
    opacity: 0.07;
    z-index: -1;
    line-height: 250px;
  }
`;

export const Steps = styled.div`
  margin-top: ${({ marginTop = 65 }) => marginTop}px;
  > :not(:first-child) {
    margin-top: 150px;
  }
`;

export const Step = styled(Row)`
  justify-content: center;
  > :first-child {
    margin-right: ${({ gap = 120 }) => gap}px;
  }
`;

export const StepText = styled.div`
  position: relative;
  max-width: ${({ maxWidth = 443 }) => maxWidth}px;

  ul {
    margin-top: 15px;
    margin-left: 10px;

    > :not(:first-child) {
      margin-top: 10px;
    }
  }

  > .bg-number {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-20%, -50%);
    font-size: 500px;
    line-height: 500px;
    font-weight: 700;
    color: ${({ theme }) => theme.palette.red};
    opacity: 0.07;
  }
`;

export const Restaurants = styled(Row)`
  margin-top: 30px;
  justify-content: center;
  > :not(:first-child) {
    margin-left: 60px;
  }

  > ${Column} {
    max-width: 140px;

    > img {
      width: 140px;
      height: 140px;
      border-radius: 25px;
      box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.2);
      margin-bottom: 12px;
    }

    > ${Text} {
      text-align: center;
    }
  }
`;

export const UserInterviewsList = styled.ol`
  margin-top: 15px;
  margin-left: 10px;

  > :not(:first-child) {
    margin-top: 10px;
  }
`;

export const Insights = styled(Row)`
  justify-content: center;
  margin-top: 72px;
  position: relative;

  > * {
    padding: 0 25px;
  }

  > :first-child {
    border-right: 5px solid
      ${({ theme }) => Color.makeHexTranslucent(theme.palette.red, 0.1)};
  }

  ${Text} {
    text-align: center;
  }
`;

export const InsightColumn = styled(Column)`
  > :last-child {
    margin-top: 40px;
    width: 460px;
    height: 185px;
    justify-content: space-between;
  }
`;

export const InsightExampleColumn = styled(Column)`
  justify-content: space-between;
  ${({ maxWidth }) => (maxWidth ? `max-width: ${maxWidth}px;` : '')}
  height: 100%;
`;

export const InsightDivider = styled.div`
  width: 5px;
  height: 100%;
  background-color: ${({ theme }) =>
    Color.makeHexTranslucent(theme.palette.red, 0.1)};
`;

export const PersonaSection = styled.div`
  width: unset !important;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 370px 560px;
  column-gap: 32px;
`;

export const PersonaImage = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;

  > div {
    position: absolute;
    bottom: 20px;
    left: 20px;
  }
`;

export const PersonaText = styled.div`
  > :first-child {
    text-align: center;
  }

  > :nth-child(2) {
    > :first-child {
      margin-bottom: 6px;
    }
  }

  > :not(:first-child) {
    margin-top: 10px;
  }

  ul {
    margin-top: 2px;
    margin-left: 10px;

    > :not(:first-child) {
      margin-top: 4px;
    }
  }
`;

export const PlayPauseVideo = styled.video`
  cursor: pointer;
`;

export const ImprovementVideos = styled(Row)`
  position: relative;
  svg {
    width: 60px;
    height: 60px;
    fill: ${({ theme }) => theme.palette.red};
  }

  &::after {
    content: 'Click to play/pause';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 12px);
    color: ${({ theme }) => theme.palette['secondary-light']};
    font-size: 20px;
  }
`;

export const FinalGrid = styled.div`
  display: grid;
  grid-template-columns: 250px 250px 250px 250px;
  grid-gap: 25px;
  justify-content: center;

  > img {
    width: 100%;
    height: auto;
  }
`;

export const IFrame = styled.iframe`
  width: 100%;
  height: 800px;
  margin-top: 50px;
  border: 1px solid ${({ theme }) => theme.palette.border};
`;

export const Reflections = styled.div`
  > :not(:first-child) {
    margin-top: 30px;
  }

  ul,
  ol {
    margin-left: 10px;

    > :not(:first-child) {
      margin-top: 10px;
    }
  }
`;

export const ThankYou = styled.div`
  > :first-child {
    margin-bottom: 38px;
  }
`;
