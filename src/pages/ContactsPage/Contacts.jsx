import { TitleCont, TitlePhone } from 'components/App.styled';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { PhoneBook } from 'components/PhoneBook/PhoneBook';
import React from 'react';

export function Contacts() {
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
