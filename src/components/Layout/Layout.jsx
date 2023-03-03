import { Loader } from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { logOutRequest } from 'redux/auth/usersOperation';
import { selectIsLoggedIn, selectUserData } from 'redux/selectors';
import { Container, Header, StyledNavLink, Text, Btn } from './Layout.styled';

export function Layout() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUserData);

  const handleLogOut = () => {
    dispatch(logOutRequest());
  };
  return (
    <>
      <Container>
        <Header>
          <nav>
            {isLoggedIn ? (
              <>
                <StyledNavLink to="/">👋 Home</StyledNavLink>
                <StyledNavLink to="/contacts">Contacts</StyledNavLink>
                <Text>Hello, {userData.name}</Text>
                <Btn onClick={handleLogOut}>Logout</Btn>
              </>
            ) : (
              <>
                <StyledNavLink to="/">👋 Home</StyledNavLink>
                <StyledNavLink to="/sign-up">Sing up</StyledNavLink>
                <StyledNavLink to="/log-in">Log In</StyledNavLink>
              </>
            )}
          </nav>
        </Header>
      </Container>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
