import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { useDimensions } from '../hooks/useDimensions';
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
import { Icons } from '../ui';
import { Color } from '../util';

const images = [
  Starburst,
  Table1,
  Converse,
  Tomatoes,
  Ice,
  Nose,
  Table2,
  Bugs,
  Eye,
  Mango,
  Flowers,
  Ear
];

const Container = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  width: fit-content;
  height: fit-content;
`;

const Image = styled.img`
  max-width: ${({ maxWidth }) => maxWidth}px;
  width: auto;
  height: auto;
`;

const ArrowContainer = css`
  position: absolute;
  bottom: 10px;
  cursor: pointer;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${({ theme }) =>
    Color.makeHexTranslucent(theme.palette.white, 0.4)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftArrow = styled.div`
  ${ArrowContainer}
  left: 10px;
`;

const RightArrow = styled.div`
  ${ArrowContainer}
  right: 10px;
`;

export const ArtCarousel = () => {
  const { width } = useDimensions();
  const [index, setIndex] = useState(0);
  return (
    <Container>
      <Image src={images[index]} alt="art" maxWidth={width - 80} />
      {index > 0 && (
        <LeftArrow onClick={() => setIndex((prev) => prev - 1)}>
          <Icons.leftCaret />
        </LeftArrow>
      )}
      {index < images.length - 1 && (
        <RightArrow onClick={() => setIndex((prev) => prev + 1)}>
          <Icons.rightCaret />
        </RightArrow>
      )}
    </Container>
  );
};
