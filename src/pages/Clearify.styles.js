import styled from 'styled-components';

import { Column, Row, Text } from '../ui';
import { Color } from '../util';

export const Header = styled(Row)`
  width: 100%;
  padding: 150px 0;
  background-color: ${({ theme }) =>
    Color.makeHexTranslucent(theme.palette.green, 0.7)};
  justify-content: center;

  > :first-child {
    margin-right: 20px;
  }
`;
