import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { StyledNavLink } from './Layout.styled';

export function Layout() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      <header>
        <nav>
          {/* {!isLoggedIn ? (
            <>
              <StyledNavLink to="/">Home</StyledNavLink>
              <StyledNavLink to="/contacts">Contacts</StyledNavLink>
              <button>Logout</button>
            </>
          ) : (
            <>
              <StyledNavLink to="/sign-up">Sing up</StyledNavLink>
              <StyledNavLink to="/log-in">Log In</StyledNavLink>
            </>
          )} */}
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/contacts">Contacts</StyledNavLink>
          <StyledNavLink to="/sign-up">Sing up</StyledNavLink>
          <StyledNavLink to="/log-in">Log In</StyledNavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
