import React from 'react';
import "./Header.scss";
import logo from "../assets/images/sibdev-logo.png";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import { useAppDispatch } from '../store';
import { logoutUser } from '../store/auth/actionCreators';

function Header() {
  const dispatch = useAppDispatch();

  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  )

  return (
    <header className='header'>
        <div className="header__container">
            <div className="main__handling">
                <div className="logo"><img src={logo} alt="Logo" /></div>
                <Link className='link' to={'/search'}>
                  <div className="search__button"><p>Поиск</p></div>
                </Link>
                <Link className='link' to={'/favorites'}>
                  <div className="favorites__button"><p>Избранное</p></div>
                </Link>
            </div>
            <Link className='link' to={'/login'}>
              <div className="logout"><p onClick={() => dispatch(logoutUser())}>Выйти</p></div>
            </Link>
        </div>
    </header>
  )
}

export default Header