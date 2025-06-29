// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { jobApi } from '../features/job/jobApi';

export const store = configureStore({
  reducer: {
    [jobApi.reducerPath]: jobApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobApi.middleware),
});
