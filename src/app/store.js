import { configureStore } from '@reduxjs/toolkit';
import { jobApi } from '../features/job/jobApi';
import { adminApi } from '../features/admin/adminApi';
import { requirementApi } from '../features/job/requirementApi';
import { jobOpeningsApi } from '../features/job/jobOpeningsApi'; // ✅ NEW

export const store = configureStore({
  reducer: {
    [jobApi.reducerPath]: jobApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [requirementApi.reducerPath]: requirementApi.reducer,
    [jobOpeningsApi.reducerPath]: jobOpeningsApi.reducer, // ✅ ADD
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      jobApi.middleware,
      adminApi.middleware,
      requirementApi.middleware,
      jobOpeningsApi.middleware // ✅ ADD
    ),
});
