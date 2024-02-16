import styled from 'styled-components';

import { ReactComponent as _Blob } from '../images/clearify-case/blob.svg';
import { Column, Row, Text } from '../ui';

export const Header = styled(Row)`
  width: 100%;
  padding: 155px 0 80px 0;
  background: linear-gradient(
    246deg,
    #40a582 15.53%,
    rgba(64, 165, 130, 0.25) 89.74%
  );
  justify-content: center;
`;

export const Computer = styled.img`
  width: 500px;
  height: auto;

  margin-right: 0 !important;
`;

export const ClearifyLogo = styled.img`
  height: 130px;
  width: auto;
  margin-bottom: 40px;
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

export const ProblemQuestion = styled(Text)`
  margin-top: 50px;
  padding: 0 205px;

  text-align: center;
  position: relative;

  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 160px;
    font-weight: 700;
    color: ${({ theme }) => theme.palette.green};
    opacity: 0.07;
    z-index: -1;
    line-height: 160px;
  }
`;

export const SectionDivider = styled.div`
  border-top: 1px solid ${({ theme }) => theme.palette.border};
  padding: 30px 0;
  margin-top: 80px;
  font: ${({ theme }) => theme.textStyles.desktop['karla-h3']};
  font-weight: 500;
`;

export const SectionTitle = styled.div`
  margin-bottom: 30px;
  font: ${({ theme }) => theme.textStyles.desktop['karla-h1']};
  font-weight: 700;
`;

export const Solution = styled.div`
  margin: 50px auto 30px auto;
  padding: 0 85px;
  position: relative;
`;

export const SolutionTR = styled.img`
  position: absolute;
  border-radius: 13.511px;
  box-shadow: 0px 1.351px 13.511px 0px rgba(0, 77, 54, 0.5);
  width: 270px;
  top: 0;
  right: 235px;
`;

export const SolutionBL = styled.img`
  position: absolute;
  border-radius: 13.511px;
  box-shadow: 0px 1.351px 13.511px 0px rgba(0, 77, 54, 0.5);
  width: 270px;
  left: 235px;
  bottom: 0;
`;

export const SolutionTL = styled(Text)`
  max-width: 251px;
  text-align: end;
  margin-top: 44px;
  margin-bottom: 293px;
  padding-top: 8px;
  border-top: 2px solid ${({ theme }) => theme.palette.green};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.palette.green};
    top: 0px;
    left: 0px;
    transform: translate(-50%, calc(-50% - 1px));
  }
`;

export const SolutionBR = styled(Text)`
  max-width: 260px;
  margin-left: 500px;
  margin-bottom: 87px;
  padding-top: 8px;
  border-top: 2px solid ${({ theme }) => theme.palette.green};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.palette.green};
    top: 0px;
    right: 0px;
    transform: translate(50%, calc(-50% - 1px));
  }
`;

export const CompetitorLogos = styled.img`
  width: 680px;
  height: auto;
  margin: 50px auto;
`;

export const CompetitorCols = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;
  padding: 0 75px;
  column-gap: 62px;

  li {
    font: ${({ theme }) => theme.textStyles.desktop['karla-t2']};
    margin-top: 8px;
  }

  ul {
    margin-top: 18px;
  }
`;

export const InsightsGrid = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 450px);
  column-gap: 30px;
  row-gap: 90px;
  align-items: center;
  justify-content: center;
`;

export const Insight = styled.div`
  position: relative;
  max-width: 350px;

  > :first-child {
    margin-bottom: 12px;
  }

  .highlight {
    color: ${({ theme }) => theme.palette.green};
    font-weight: 700;
  }
`;

export const Blob = styled(_Blob)`
  fill: ${({ color }) => color};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

export const DesignSystem = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 80px;
`;

export const DesignSystemCol = styled.div`
  > :not(:first-child) {
    margin-top: 20px;
  }
  position: relative;
`;

export const DesignSystemHeader = styled(Text)`
  padding-bottom: 10px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.palette.border};
  margin-bottom: 24px;
`;

export const Typography = styled.div``;

export const ColorRow = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 19px;
  align-items: center;
`;

export const ColorSquare = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ color }) => color};
`;

export const SpacingGrid = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 18px;
  row-gap: 32px;
  align-items: center;
`;

export const SpacingSquare = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: 1px solid #285319;
  background-color: #e3ffe9;
  margin-left: auto;
`;

export const Iconography = styled.img`
  position: absolute;
  width: 245px;
  height: auto;
  top: 26px;
`;

export const Logos = styled(Row)`
  margin-top: 40px;
  > :first-child {
    margin-right: 35px;
  }

  > :last-child {
    margin-left: 18px;
  }
`;

export const WordLogo = styled.img`
  width: 276px;
`;

export const CircleLogo = styled.img`
  width: 70px;
`;

export const CircleLogos = styled(Row)`
  margin-top: 12px;
  > :not(:first-child) {
    margin-left: 15px;
  }
`;

export const SquareLogo = styled.img`
  width: 169px;
`;

export const InputScreens = styled.img`
  width: 855px;
  margin: 32px 0 54px 0;
`;

export const OutputScreens = styled.img`
  width: 1027px;
  margin: 32px 0 54px 0;
`;

export const OutputConcerns = styled.ol`
  margin-top: 8px;
  margin-left: 10px;
  font-weight: bold;

  > :not(:first-child) {
    margin-top: 10px;
  }

  span {
    font-weight: normal;
  }
`;

export const Enhancements = styled.ul`
  margin-left: 10px;

  > :not(:first-child) {
    margin-top: 4px;
  }
`;

export const FinalDesignColumn = styled(Column)`
  margin: 36px 21px 40px 21px;
  > :first-child {
    margin-bottom: 15px;
  }
`;

export const FinalScreen = styled.img`
  width: 315px;
`;

export const DemoVideo = styled(Row)`
  margin-top: 36px;
`;

export const NextSteps = styled(Text)`
  margin: 30px 0;
`;

export const NextStepsList = styled.ul`
  margin-top: 8px;
  margin-left: 10px;

  > :not(:first-child) {
    margin-top: 4px;
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
