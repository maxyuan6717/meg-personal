import React, { useEffect } from 'react';

import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

import * as Styled from './Clearify.styles';

export const Clearify = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Styled.Header></Styled.Header>
      <Footer />
    </>
  );
};
