import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Text } from '../ui';

const Container = styled.div`
  padding: 64px 84px 40px 84px;
  background-color: transparent;
  display: grid;
  grid-template-columns: 1fr auto auto;
  column-gap: 54px;
  align-items: center;
  width: 100%;
`;

export const NavLink = styled(Text)`
  cursor: pointer;
  color: ${({ theme, selected }) =>
    selected ? theme.palette['off-black'] : theme.palette.secondary};
  position: relative;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.palette['off-black']};
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.palette['off-black']};
    transform-origin: center top;
    transform: scale(0, 1);
    transition:
      color 0.2s,
      transform 0.2s ease-out;
  }

  &:active:before {
    background-color: ${({ theme }) => theme.palette['off-black']};
  }

  &:hover:before,
  &:focus:before {
    transform-origin: center top;
    transform: scale(1, 1);
  }
`;

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Link to="/">
        <Text type="display-h2" color="off-black">
          MWY
        </Text>
      </Link>
      <Link to="/">
        <NavLink type="text-t4" selected={pathname === '/'}>
          Works
        </NavLink>
      </Link>
      <Link to="/about">
        <NavLink type="text-t4" selected={pathname === '/about'}>
          About
        </NavLink>
      </Link>
    </Container>
  );
};
