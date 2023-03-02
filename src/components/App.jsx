import { Contacts } from 'pages/ContactsPage/Contacts.jsx';
import { Home } from 'pages/HomePage/Home.jsx';
import { Login } from 'pages/LoginPage/Login.jsx';
import { Signin } from 'pages/SigninPage/Signin.jsx';
import { ErrorPage } from 'pages/ErrorPage/ErrorPage.jsx';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

export function App() {
  //передаем пропсами
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </main>
  );
}
