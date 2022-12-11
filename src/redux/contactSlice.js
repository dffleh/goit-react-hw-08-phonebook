import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const defaultContacts = {
  contacts: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handdleFulfiled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: defaultContacts,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      handdleFulfiled(state);
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      handdleFulfiled(state);
      state.contacts.push(action.payload);
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      handdleFulfiled(state);
      const deleteById = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(deleteById, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

const defaultFilter = '';
const filterSlice = createSlice({
  name: 'filter',
  initialState: defaultFilter,
  reducers: {
    setFilterValue(state, action) {
      return (state = action.payload);
    },
  },
});

export const contactRedusers = contactSlice.reducer;

export const { setFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
