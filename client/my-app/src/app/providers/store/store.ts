import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { authSlice } from '../../../entities/user/authSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export type StoreType = typeof store;

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

// кастомные хуки
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
