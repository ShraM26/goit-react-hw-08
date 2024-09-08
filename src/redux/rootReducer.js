import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './contacts/slice';
import authReducer from './auth/slice';
import filtersReducer from './filters/slice'; // Если используется фильтры

const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: authReducer,
  filters: filtersReducer, // Если используется фильтры
});

export default rootReducer;