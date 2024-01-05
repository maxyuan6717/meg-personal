import styled from 'styled-components';

import { ReactComponent as _Blob } from '../images/clearify-case/blob.svg';
import { Column, Row, Text } from '../ui';
import { Color } from '../util';

export const Header = styled(Row)`
  width: 100%;
  padding: 130px 0;
  background-color: ${({ theme }) =>
    Color.makeHexTranslucent(theme.palette.green, 0.7)};
  justify-content: center;

  > :first-child {
    margin-right: 20px;
  }
`;

export const Computer = styled.img`
  width: 600px;
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

export const CompetitorLogos = styled.img`
  width: 680px;
  height: auto;
  margin: 30px auto;
`;

export const CompetitorCols = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;
  padding: 0 50px;
  column-gap: 36px;

  li {
    font: ${({ theme }) => theme.textStyles.desktop['text-t5']};
    margin-top: 8px;
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
  max-width: 438px;

  > :first-child {
    margin-bottom: 5px;
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

export const Typography = styled.div`
  > :first-child {
    margin-bottom: 4px;
  }
`;

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
  margin-top: 32px 0 54px 0;
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
    margin-bottom: 8px;
  }
`;

export const FinalScreen = styled.img`
  width: 332px;
`;

export const ThankYou = styled.div`
  > :first-child {
    margin-bottom: 38px;
  }
`;
