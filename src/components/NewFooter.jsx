import React from 'react';
import styled from 'styled-components';

import resume from '../files/meg_yuan_resume.pdf';
import { Icons, Row } from '../ui';

const Container = styled(Row)`
  position: fixed;
  bottom: 36px;
  right: 36px;
  z-index: 1000;

  > :nth-child(2) {
    margin-left: 7.7px;
    margin-right: 12.2px;
  }

  svg {
    fill: ${({ theme }) => theme.palette['off-black']};
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
      <Button href={resume} target="_blank" rel="noopener noreferrer">
        <Icons.pdf width={30} height={30} />
      </Button>
      <Button
        href="https://www.linkedin.com/in/megyuan/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icons.linkedIn width={30} height={30} />
      </Button>
      <Button
        href="mailto: megyuan@ucla.edu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icons.email width={30} height={30} />
      </Button>
    </Container>
  );
};
