import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';
import { phonebookApi } from './phonebookApi';

export default configureStore({
  reducer: {
    [phonebookApi.reducerPath]: phonebookApi.reducer,
    filter: filterSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(phonebookApi.middleware),
});
