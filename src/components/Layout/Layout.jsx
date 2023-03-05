import { Loader } from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { logOutRequest } from 'redux/auth/usersOperation';
import { selectIsLoggedIn, selectUserData } from 'redux/selectors';
import {
  Container,
  Header,
  StyledNavLink,
  Text,
  Btn,
  Regested,
  Navig,
  Welcome,
} from './Layout.styled';

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
          <Navig>
            {isLoggedIn ? (
              <>
                <div>
                  <StyledNavLink to="/">👋 Home</StyledNavLink>
                  <StyledNavLink to="/contacts"> ☎️ Contacts</StyledNavLink>
                </div>
                <Welcome>
                  <Text>🙂 Hello, {userData.name}</Text>
                  <Btn onClick={handleLogOut}>Logout</Btn>
                </Welcome>
              </>
            ) : (
              <>
                <StyledNavLink to="/">👋 Home</StyledNavLink>
                <Regested>
                  <StyledNavLink to="/sign-up">Sign up</StyledNavLink>
                  <StyledNavLink to="/log-in">Log In</StyledNavLink>
                </Regested>
              </>
            )}
          </Navig>
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
