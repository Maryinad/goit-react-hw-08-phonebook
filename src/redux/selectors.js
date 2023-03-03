import { createSelector } from '@reduxjs/toolkit';

//filter
export const selectFilterValue = state => state.filterData.filter;

//phonebook
export const selectContacts = state => state.phonebook.contacts;
export const selectIsLoadingPhonebook = state => state.phonebook.isLoading;
export const selectError = state => state.phonebook.error;

//auth
export const selectUserData = state => state.auth.userData;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectAuthError = state => state.auth.error;
export const selectIsLoadingAuth = state => state.auth.isLoading;
export const selectUserName = state => state.auth.userData.name;

export const selectFilteredContact = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase)
    )
);
