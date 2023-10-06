import React from 'react';
import styled from 'styled-components';

import resume from '../files/meg_yuan_resume.pdf';
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
        <Button
          href="mailto: megyuan@ucla.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons.email />
        </Button>
        <Button
          href="https://www.linkedin.com/in/megyuan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons.linkedIn />
        </Button>
        <Button href={resume} target="_blank" rel="noopener noreferrer">
          <Icons.pdf />
        </Button>
      </IconRow>
      <Text type="display-h3" color="off-black">
        Created by <span className="blue">Meg Yuan</span>
      </Text>
    </Container>
  );
};
