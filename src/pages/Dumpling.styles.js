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

export const UserInterviewsList = styled.ol`
  margin-top: 15px;
  margin-left: 10px;

  > :not(:first-child) {
    margin-top: 10px;
  }
`;

export const Steps = styled.div`
  margin-top: 65px;
  > :not(:first-child) {
    margin-top: 150px;
  }
`;

export const Step = styled(Row)`
  justify-content: center;
  > :first-child {
    margin-right: 100px;
  }
`;

export const StepText = styled.div`
  position: relative;
  max-width: 443px;

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
