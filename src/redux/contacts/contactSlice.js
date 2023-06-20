import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.contacts = payload;
      state.error = null;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.contacts = state.contacts.filter(({ id }) => id !== payload.id);
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addContact.pending]: state => {
       state.isLoading = true;
     },
    [addContact.fulfilled]: (state, { payload }) => {
       state.isLoading = false;
     state.error = null;
      state.contacts = [payload, ...state.contacts];
      // state.contacts.push(payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;















// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContact(state, { payload }) {
//       state.contacts.push(payload);
//     },
//     deleteContact(state, { payload }) {
//       state.contacts = state.contacts.filter(contact => contact.id !== payload);
//     },
//   },
// });

// export const contactsReducer = contactsSlice.reducer;
// export const { addContact, deleteContact } = contactsSlice.actions;
