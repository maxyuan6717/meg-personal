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
`;

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Link to="/">
        <Text type="display-h2">MWY</Text>
      </Link>
      <Link to="/">
        <NavLink type="text-t4" selected={pathname === '/'}>
          Works
        </NavLink>
      </Link>
      <Link to="about">
        <NavLink type="text-t4" selected={pathname === '/about'}>
          About
        </NavLink>
      </Link>
    </Container>
  );
};
