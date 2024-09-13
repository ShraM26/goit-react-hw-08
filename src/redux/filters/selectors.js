import { createSelector } from "@reduxjs/toolkit";
import { selectContacts, selectSearchName } from "../contacts/selectors";

export const selectFilteredContacts = createSelector(
  [selectContacts, selectSearchName],
  (contacts, searchName) => {
    return contacts.filter((elem) => {
      return (
        elem.name.toLowerCase().includes(searchName.toLowerCase()) ||
        elem.number.toLowerCase().includes(searchName.toLowerCase())
      );
    });
  }
);