import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDimensions } from '../hooks/useDimensions';
import { Icons } from '../ui';

const Container = styled.div`
  cursor: pointer;
  position: fixed;
  bottom: 32px;
  right: 20px;

  transition: opacity 0.2s ease-in-out;
  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? 'all' : 'none')};

  svg {
    width: 55px;
    height: 55px;
    fill: ${({ theme }) => theme.palette.secondary};
  }
`;

export const ScrollUp = () => {
  const [show, setShow] = React.useState(false); // [1
  const { height } = useDimensions();

  useEffect(() => {
    const scrollUp = () => {
      if (window.scrollY >= height) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener('scroll', scrollUp);
    return () => window.removeEventListener('scroll', scrollUp);
  }, [height]);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container show={show} onClick={scrollUp}>
      <Icons.upArrow />
    </Container>
  );
};
