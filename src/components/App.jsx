import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { getCurrentUserRequest } from 'redux/auth/usersOperation';
import { lazy, useEffect } from 'react';
import ErrorPage from 'pages/ErrorPage/ErrorPage.jsx';

// import Login from 'pages/LoginPage/Login.jsx';
// import Home from 'pages/HomePage/Home.jsx';
// import Signin from 'pages/SigninPage/Signin.jsx';
// import Contacts from 'pages/ContactsPage/Contacts.jsx';

const HomePage = lazy(() => import('pages/HomePage/Home.jsx'));
const LogInPage = lazy(() => import('pages/LoginPage/Login.jsx'));
const SignUpPage = lazy(() => import('pages/SigninPage/Signin.jsx'));
const ContactsPage = lazy(() => import('pages/ContactsPage/Contacts.jsx'));

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserRequest());
  }, [dispatch]);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/log-in" element={<LogInPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </main>
  );
}
