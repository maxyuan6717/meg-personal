import styled from 'styled-components';

import { Column } from '../ui';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.palette['off-white']};
`;

export const Content = styled(Column)`
  margin: 30px 150px;

  > :first-child {
    margin-bottom: 8px;
  }
`;
