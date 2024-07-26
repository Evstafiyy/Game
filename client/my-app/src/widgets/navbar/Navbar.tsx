import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../app/providers/store/store';
import { logout } from '../../entities/user/authSlice';

function Navbar(): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.user);
  console.log(123123, user);

  const dispatch = useAppDispatch();

  const onHandleLogout = (): void => {
    void dispatch(logout());
  };
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">main</NavLink>
        </li>

        <li>
          <NavLink to="/games">games</NavLink>
        </li>
        {user ? (
          <>
            <p>{`HELLO ${user.name}`}</p>
            <NavLink to="/auth/logout" onClick={onHandleLogout}>
              Logout
            </NavLink>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/auth/registration">Регистрация</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
