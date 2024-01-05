import styled from 'styled-components';

import { ReactComponent as _Blob } from '../images/clearify-case/blob.svg';
import { Column, Row } from '../ui';
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
