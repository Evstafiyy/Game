/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect } from 'react';
import './App.css';
import AppRoutes from './providers/routes/AppRoutes';
import Navbar from '../widgets/navbar/Navbar';
import { useAppDispatch } from './providers/store/store';
import { tokensRefresh } from '../entities/user/authSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch()

  useEffect(() => {
    void dispatch(tokensRefresh());
  }, []);

  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
}

export default App;
