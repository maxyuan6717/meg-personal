import React from 'react';
import styled from 'styled-components';

import { Icons, Text } from '../ui';
import { Color } from '../util';

const Container = styled.div`
  padding: 18px 40px;
  background-color: ${({ theme }) =>
    Color.makeHexTranslucent(theme.palette.white, 0.9)};
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  column-gap: 35px;
  align-items: center;
  width: 100%;

  ${({ fixed }) => fixed && 'position: fixed; top: 0; left:0; z-index: 1000;'}
`;

export const NavLink = styled(Text)`
  cursor: pointer;
  color: ${({ theme }) => theme.palette.black};
  position: relative;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.palette.black};
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.palette.black};
    transform-origin: center top;
    transform: scale(0, 1);
    transition:
      color 0.2s,
      transform 0.2s ease-out;
  }

  &:active:before {
    background-color: ${({ theme }) => theme.palette.black};
  }

  &:hover:before,
  &:focus:before {
    transform-origin: center top;
    transform: scale(1, 1);
  }
`;

export const Navbar = ({ fixed = false, scrollTo }) => {
  return (
    <Container fixed={fixed}>
      <Icons.logo width={36} height={36} />
      <NavLink onClick={() => scrollTo('works')} type="karla-h1">
        Work
      </NavLink>
      <NavLink onClick={() => scrollTo('about')} type="karla-h1">
        About
      </NavLink>
      <NavLink onClick={() => scrollTo('art')} type="karla-h1">
        Artwork
      </NavLink>
    </Container>
  );
};
