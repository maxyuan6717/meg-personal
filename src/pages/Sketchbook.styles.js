import styled from 'styled-components';

import { Column, Row } from '../ui';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.palette['off-white']};
`;

export const Content = styled(Column)`
  margin: 30px auto;

  > :first-child {
    margin-bottom: 8px;
  }
`;

export const Images = styled(Row)`
  justify-content: center;
  align-items: flex-start;
  margin: 50px 0;
`;

export const LeftCol = styled(Column)`
  width: 318px;

  img {
    width: 100%;
    height: auto;
    margin-bottom: 42px;
  }
`;

export const RightCol = styled(Column)`
  margin-left: 30px;
`;

export const FirstRow = styled(Row)`
  > :not(:first-child) {
    margin-left: 24px;
  }
`;

export const SecondRow = styled(Row)`
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Table2Col = styled(Column)``;

export const StarburstCol = styled(Column)`
  margin-top: 25px;
`;

export const ThirdRow = styled(Row)`
  margin-top: 25px;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

export const EyeCol = styled(Column)`
  position: relative;
`;

export const Mango = styled.img`
  position: absolute;
  top: 100%;
  transform: translateY(25px);
  left: 0;
`;
