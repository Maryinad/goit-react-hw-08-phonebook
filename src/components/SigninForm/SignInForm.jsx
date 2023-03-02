import { Loader } from 'components/Loader/Loader';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, registerRequest } from 'redux/auth/usersOperation';

export function SignInForm({ isLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.isLoading);

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
    <form onSubmit={handleSubmit}>
      {!isLogin && (
        <label>
          <span>Name: </span>
          <input
            type="text"
            name="name"
            placeholder={'Specify your name'}
            required
            onChange={handleChange}
          />
        </label>
      )}
      <label>
        <span>Email: </span>
        <input
          type="email"
          name="email"
          placeholder={'Specify your email'}
          required
          onChange={handleChange}
        />
      </label>
      <label className="input-group">
        <span>Password: </span>
        <input
          type="password"
          name="password"
          minLength={7}
          placeholder={'Specify your password'}
          required
          onChange={handleChange}
        />
      </label>
      <>
        {isLoading && <Loader />}
        <button type="submit">{!isLogin ? 'Sign up' : 'Log in'}</button>
      </>
    </form>
  );
}
