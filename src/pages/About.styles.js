import styled from 'styled-components';

import { Column } from '../ui';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.palette['off-white']};
`;

export const Content = styled(Column)`
  margin: 100px auto;
`;

export const FirstSection = styled.div`
  display: grid;
  grid-template-columns: auto 515px;
  column-gap: 60px;
`;

export const FirstSectionText = styled.div`
  > :not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const ProfileImage = styled.img`
  width: 390px;
  height: auto;
`;

export const Asterisks = styled.div`
  margin: 72px auto;
`;

export const SecondSection = styled.div`
  display: grid;
  grid-template-columns: 740px auto;
  column-gap: 30px;
  margin-bottom: 20px;
`;

export const OatmealImage = styled.img`
  width: 210px;
  height: auto;
`;
