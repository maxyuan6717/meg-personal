import styled from 'styled-components';

import { Column, Row } from '../ui';
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

export const UserInterviewsList = styled.ol`
  margin-top: 15px;
  margin-left: 10px;

  > :not(:first-child) {
    margin-top: 10px;
  }
`;
