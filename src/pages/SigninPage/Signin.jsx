import { SignInForm } from 'components/SigninForm/SignInForm';
import React from 'react';
import { useSelector } from 'react-redux';

function Signin() {
  const isLogin = useSelector(state => state.auth.isLoggedIn);
  return <SignInForm isLogin={isLogin} />;
}

export default Signin;
