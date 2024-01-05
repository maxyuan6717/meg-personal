import React from 'react';

import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import Bugs from '../images/sketchbook/bugs.png';
import Converse from '../images/sketchbook/converse.png';
import Ear from '../images/sketchbook/ear.png';
import Eye from '../images/sketchbook/eye.png';
import Flowers from '../images/sketchbook/flowers.png';
import Ice from '../images/sketchbook/ice.png';
import Mango from '../images/sketchbook/mango.png';
import Nose from '../images/sketchbook/nose.png';
import Starburst from '../images/sketchbook/starburst.png';
import Table1 from '../images/sketchbook/table1.png';
import Table2 from '../images/sketchbook/table2.png';
import Tomatoes from '../images/sketchbook/tomatoes.png';
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
      <Styled.Images>
        <Styled.LeftCol>
          <img src={Table1} alt="table1" />
          <img src={Converse} alt="table2" />
        </Styled.LeftCol>
        <Styled.RightCol>
          <Styled.FirstRow align="flex-start">
            <img src={Tomatoes} width={300} alt="tomatoes" />
            <img src={Ice} width={320} alt="ice" />
            <img src={Nose} width={198} alt="nose" />
          </Styled.FirstRow>
          <Styled.SecondRow>
            <Styled.Table2Col>
              <img src={Table2} alt="table2" width={456} />
              <Styled.ThirdRow>
                <img src={Bugs} alt="bugs" width={255} />
                <Styled.EyeCol>
                  <img src={Eye} alt="eye" width={172} />
                  <Styled.Mango src={Mango} alt="mango" width={322} />
                </Styled.EyeCol>
              </Styled.ThirdRow>
            </Styled.Table2Col>
            <Styled.StarburstCol>
              <img src={Starburst} alt="starburst" width={386} />
              <Styled.ThirdRow>
                <img src={Flowers} alt="flowers" width={252} />
                <img src={Ear} alt="ear" width={110} />
              </Styled.ThirdRow>
            </Styled.StarburstCol>
          </Styled.SecondRow>
        </Styled.RightCol>
      </Styled.Images>
    </Styled.Content>
    <Footer />
  </Styled.Container>
);
