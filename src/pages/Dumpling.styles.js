import styled from 'styled-components';

import { Column, Row, Text } from '../ui';
import { Color } from '../util';

export const Header = styled(Row)`
  width: 100%;
  padding: 190px 0 115px 0;
  background: linear-gradient(
    246deg,
    rgba(228, 37, 12, 0.25) 15.53%,
    rgba(228, 37, 12, 0.75) 89.74%
  );
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
  max-width: 940px;
  display: flex;
  flex-direction: column;

  > * {
    width: 100%;
  }

  b {
    font-weight: 800;
  }
`;

export const IntroSection = styled(Row)`
  padding: 50px 95px 0 95px;
  margin-bottom: -20px;
  justify-content: space-between;
  align-items: flex-start;

  > * {
    max-width: 311px;
    > :first-child {
      font-weight: 800;
      margin-bottom: 10px;
    }
  }
`;

export const SectionDivider = styled.div`
  border-top: 1px solid ${({ theme }) => theme.palette.border};
  padding: 30px 0;
  margin-top: 80px;
  font: ${({ theme }) => theme.textStyles.desktop['karla-h3']};
`;

export const SectionTitle = styled.div`
  margin-bottom: 30px;
  font: ${({ theme }) => theme.textStyles.desktop['karla-h1']};
`;

export const ProblemQuestion = styled(Text)`
  margin-top: 50px;
  padding: 0 200px;
  text-align: center;
  position: relative;

  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 160px;
    font-weight: 700;
    color: ${({ theme }) => theme.palette.red};
    opacity: 0.07;
    z-index: -1;
    line-height: 160px;
  }
`;

export const Steps = styled.div`
  margin-top: ${({ marginTop = 110 }) => marginTop}px;
  > :not(:first-child) {
    margin-top: 135px;
  }
`;

export const Step = styled(Row)`
  justify-content: center;
  > :first-child {
    margin-right: ${({ gap = 55 }) => gap}px;
  }
`;

export const StepText = styled.div`
  position: relative;
  max-width: ${({ maxWidth = 365 }) => maxWidth}px;

  ul {
    margin: 15px 0 15px 10px;

    > :not(:first-child) {
      margin-top: 10px;
    }
  }

  ul.no-top-margin {
    margin-top: 0 !important;
  }

  > .bg-number {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-20%, -50%);
    font-size: 350px;
    line-height: 350px;
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
    max-width: 95px;

    > img {
      width: 95px;
      height: 95px;
      border-radius: 18px;
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
  > :first-child {
    margin-bottom: 8px;
  }

  > :last-child {
    margin-top: 30px;
    width: 350px;
    height: 155px;
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
  grid-template-columns: 325px 460px;
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
    margin-top: 8px !important;
    > :first-child {
      margin-bottom: 4px;
    }
  }

  > :not(:first-child) {
    margin-top: 16px;
  }

  ul {
    margin-top: 4px;
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
    width: 40px;
    height: 40px;
    fill: ${({ theme }) => theme.palette.red};
  }

  &::after {
    content: 'Click to play/pause';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 12px);
    color: ${({ theme }) => theme.palette['secondary-light']};
    font: ${({ theme }) => theme.textStyles.desktop['karla-t2']};
  }
`;

export const FinalGrid = styled.div`
  display: grid;
  grid-template-columns: 219px 219px 219px 219px;
  grid-gap: 22px;
  justify-content: center;

  > img {
    width: 100%;
    height: auto;
  }
`;

export const IFrame = styled.iframe`
  width: 100%;
  height: 575px;
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
  margin-bottom: 160px;

  a {
    font-weight: 800;
  }
`;
