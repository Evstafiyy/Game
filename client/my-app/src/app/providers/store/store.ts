import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';


const store = configureStore({
  reducer: {
    // film: filmSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
