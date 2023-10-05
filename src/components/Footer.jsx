import React from 'react';
import styled from 'styled-components';

import { Column, Icons, Row, Text } from '../ui';

const Container = styled(Column)`
  width: 100%;
  margin-top: 150px;
  margin-bottom: 55px;

  .blue {
    color: ${({ theme }) => theme.palette.blue};
  }
`;

const IconRow = styled(Row)`
  > :nth-child(2) {
    margin-left: 12px;
    margin-right: 5px;
  }
  margin-bottom: 10px;

  svg {
    fill: ${({ theme }) => theme.palette['off-black']};
    width: 40px;
    height: 40px;
  }
`;

const Button = styled.a`
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  :hover {
    transform: translateY(-6px);
    opacity: 0.5;
  }
`;

export const Footer = () => {
  return (
    <Container>
      <IconRow>
        <Button>
          <Icons.email />
        </Button>
        <Button>
          <Icons.linkedIn />
        </Button>
        <Button>
          <Icons.pdf />
        </Button>
      </IconRow>
      <Text type="display-h3" color="off-black">
        Created by <span className="blue">Meg Yuan</span>
      </Text>
    </Container>
  );
};
