import React from 'react';

import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { Text } from '../ui';

import * as Styled from './Sketchbook.styles';

export const Sketchbook = () => (
  <Styled.Container>
    <Navbar />
    <Styled.Content align="flex-start">
      <Text type="text-t3" weight={500}>
        sketchbook.
      </Text>
      <Text type="text-t5">
        a collection of sketches, doodles, digital art, paintings, and a few
        selected works from high school.
      </Text>
    </Styled.Content>
    <Footer />
  </Styled.Container>
);
