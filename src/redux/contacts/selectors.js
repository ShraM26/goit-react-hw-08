export const selectContacts = (state) => state.contacts.items;
export const selectSearchName = (state) => state.filters.name;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;