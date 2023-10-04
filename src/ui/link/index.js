import React from 'react';
import styled from 'styled-components';

import { Color } from '../../util';

const Container = styled.a`
  padding: 0px 2px;
  transition: all 0.3s ease-in-out;
  box-sizing: border-box;
  text-decoration: none;
  box-shadow: inset 0 -4px 0 ${({ color = 'blue', theme }) => Color.makeHexTranslucent(theme.palette[color], 0.4)};
  color: ${({ color = 'blue', theme }) => theme.palette[color]};

  &:hover {
    text-decoration: none !important;
    cursor: pointer;
    box-shadow: inset 0 -55px 0 0 ${({ color = 'blue', theme }) => Color.makeHexTranslucent(theme.palette[color], 0.4)};
  }
`;

export const Link = ({ children, ...rest }) => {
  return (
    <Container {...rest} target="_blank" rel="noopener noreferrer">
      {children}
    </Container>
  );
};
