import { configureStore } from '@reduxjs/toolkit';
import { jobApi } from '../features/job/jobApi';
import { adminApi } from '../features/admin/adminApi'; // ✅ import adminApi

export const store = configureStore({
  reducer: {
    [jobApi.reducerPath]: jobApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer, // ✅ include adminApi
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      jobApi.middleware,
      adminApi.middleware // ✅ add adminApi middleware
    ),
});
