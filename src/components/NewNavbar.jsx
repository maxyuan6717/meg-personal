import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Icons, Text } from '../ui';
import { Color } from '../util';

const Container = styled.div`
  padding: 18px 40px;
  background-color: ${({ theme }) =>
    Color.makeHexTranslucent(theme.palette.white, 0.9)};
  display: grid;
  grid-template-columns: 1fr auto auto;
  column-gap: 35px;
  align-items: center;
  width: 100%;

  ${({ fixed }) => fixed && 'position: fixed; top: 0; left:0; z-index: 1000;'}
`;

export const Logo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
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

export const Navbar = ({ fixed = false, scrollTo: _scrollTo }) => {
  const navigate = useNavigate();
  const defaultScrollTo = (section) => {
    navigate('/', {
      state: {
        section
      }
    });
  };

  const scrollTo = _scrollTo || defaultScrollTo;

  return (
    <Container fixed={fixed}>
      <Logo onClick={() => navigate('/')}>
        <Icons.logo width={36} height={36} />
      </Logo>
      <NavLink onClick={() => scrollTo('works')} type="karla-h3">
        Work
      </NavLink>
      <NavLink onClick={() => scrollTo('about')} type="karla-h3">
        About
      </NavLink>
      {/* <NavLink onClick={() => scrollTo('art')} type="karla-h3">
        Artwork
      </NavLink> */}
    </Container>
  );
};
