import React from 'react';
import store, { useAppSelector } from '../../app/providers/store/store';
import AuthorizationPage from '../AuthPages/AuthorizationPage';

function MainPage(): JSX.Element {
  const user = useAppSelector((store) => store.auth.user)

  return (
    <div className="MainPage">
      <h1>Парни у нас все получится!!!</h1>
      {user ? (<button>Начать игру</button>) : (<AuthorizationPage />)}
      <h1>Удачи!!!</h1>
      <img src="https://sun9-4.userapi.com/impg/0ElK-S0Ky-L_ExndILYCu3WaGAT_axAm7i7Tug/RR9_CymDumA.jpg?size=1280x800&quality=95&sign=53203e2dbb244fee93bb63132175f332&c_uniq_tag=8SK9rJYTkyMfkZakLkmB-EImfIU93gc0jcl8Wj9QcSM&type=album" alt="" />
    </div>
  );
}

export default MainPage;
