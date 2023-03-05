import { Loader } from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { loginRequest, registerRequest } from 'redux/auth/usersOperation';
import { selectIsLoadingAuth, selectUserName } from 'redux/selectors';
import {
  Btn,
  Container,
  FormField,
  InputName,
  TitleName,
} from './SigninForm.styled';

export function SignInForm({ isLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector(selectIsLoadingAuth);
  const user = useSelector(selectUserName);

  useEffect(() => {
    if (user !== null) navigate('/contacts');
  }, [user, navigate]);

  const userMap = {
    name: setName,
    email: setEmail,
    password: setPassword,
  };

  const handleChange = event => {
    const { name, value } = event.target;
    userMap[name](value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (isLogin) {
      dispatch(loginRequest({ email, password }));
    } else {
      dispatch(registerRequest({ name, email, password }));
    }
  };

  return (
    <FormField onSubmit={handleSubmit}>
      {!isLogin && (
        <Container>
          <TitleName>
            <span>Name: </span>
            <InputName
              type="text"
              name="name"
              placeholder={'Specify your name'}
              required
              onChange={handleChange}
            />
          </TitleName>
        </Container>
      )}
      <Container>
        <TitleName>
          <span>Email: </span>
          <InputName
            type="email"
            name="email"
            placeholder={'Specify your email'}
            required
            onChange={handleChange}
          />
        </TitleName>
      </Container>
      <Container>
        <TitleName>
          <span>Password: </span>
          <InputName
            type="password"
            name="password"
            minLength={7}
            placeholder={'Specify your password'}
            required
            onChange={handleChange}
          />
        </TitleName>
      </Container>
      <>
        {isLoading && <Loader />}
        <Btn type="submit">{!isLogin ? 'Sign up' : 'Log in'}</Btn>
      </>
    </FormField>
  );
}
