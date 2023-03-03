import { TitleCont, TitlePhone } from 'components/App.styled';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { PhoneBook } from 'components/PhoneBook/PhoneBook';
import WithAuthRedirect from 'HOC/WithAuthRedirect';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/phoneBook/phoneBookOperations';

function Contacts() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.userData.name);

  useEffect(() => {
    if (user === null) return;
    dispatch(getContacts());
  }, [dispatch, user]);

  return (
    <>
      <TitlePhone>Phonebook</TitlePhone>
      <PhoneBook />
      <TitleCont>Contacts</TitleCont>
      <Filter />
      <ContactList />
    </>
  );
}

export default WithAuthRedirect(Contacts, '/log-in');
