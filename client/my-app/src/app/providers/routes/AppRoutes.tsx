import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../../../page/MainPage/MainPage';

function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      {/* <Route path="/films" element={<FilmsPage/>}/>
    <Route path="/genres" element={<GenrePage/>}/> */}
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}

export default AppRoutes;
