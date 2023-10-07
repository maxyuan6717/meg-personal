import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  transform: translateY(5vh);
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.6s ease-out,
    transform 1s ease-out;
  transition-delay: 0.3s;
  will-change: opacity, visibility;

  ${({ show }) =>
    show &&
    `
      opacity: 1;
      transform: none;
      visibility: visible;
    `}
`;

function FadeInSection({ children }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const node = domRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setVisible(true);
      });
    });
    observer.observe(node);
    return () => observer.unobserve(node);
  }, []);

  return (
    <Container show={isVisible} ref={domRef}>
      {children}
    </Container>
  );
}

export default FadeInSection;
