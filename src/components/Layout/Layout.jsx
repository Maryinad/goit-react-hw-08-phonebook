import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyledNavLink } from './Layout.styled';

export function Layout() {
  return (
    <>
      <header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/contacts">Contacts</StyledNavLink>
          <StyledNavLink to="/sign-in">Sing in</StyledNavLink>
          <StyledNavLink to="/log-in">Log In</StyledNavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
