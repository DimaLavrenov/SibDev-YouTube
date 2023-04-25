import React, { useState, useEffect, useContext, FormEvent } from 'react';
import { useAppDispatch } from '../store';
import { loginUser } from '../store/auth/actionCreators';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Cover.scss";
import img from "../assets/images/sibdev-logo.png";
import { CustomContext } from '../Context';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import { loginSucess } from '../store/auth/authReducer';

function Cover() {
  const dispatch = useAppDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loginDerty, setLoginDerty] = useState(false);
  const [passwordDerty, setPasswordDerty] = useState(false);
  const [loginError, setLoginError] = useState('Логин не может быть пустым');
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
  const [formValid, setFormValid] = useState(false);
  const [modalError, setModalError] = useState('error__modal');
  // const {user, setUser} = useContext(CustomContext);
  // const navigate = useNavigate()

  useEffect(() => {
    if(loginError || passwordError){
      setFormValid(false);
    } else{
      setFormValid(true);
    }
  }, [loginError, passwordError])

  const blurHandler = (e: React.ChangeEvent<any>) => {
    switch(e.target.name){
      case 'login':
        setLoginDerty(true);
        break
      case 'password':
        setPasswordDerty(true);
        break
    }
  }

  const loginHandler = (e: React.ChangeEvent<any>) => {
    setLogin(e.target.value)
    if(!e.target.value){
      setLoginError('Логин не может быть пустым!');
    } else{
      setLoginError('');
    }
  }

  const passwordHandler = (e: React.ChangeEvent<any>) => {
    setPassword(e.target.value)
    if(!e.target.value){
      setPasswordError('Пароль не может быть пустым!');
    } else{
      setPasswordError('');
    }
  }

  // const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   let newUser = {
  //     login,
  //     password
  //   }

  //   axios.post('http://localhost:3001/users', newUser)
  //     .then((res) => {
  //       console.log(res)
  //       // navigate('/search')
  //     })
  //     .catch((err) => console.log(err.message))
  // }

  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  )

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(loginUser({ login, password }));

    if(!isLoggedIn){
      setModalError('error__modal active')
      setTimeout(() => {
        setModalError('error__modal')
      }, 4000);
    } else{
      setModalError('error__modal')
    }
  }

  return (

    <div className='lox'>
      <div className={modalError}>
        <p><i className="fa-solid fa-circle-xmark"></i> Пользователь не найден</p>
      </div>

      <form className="cover" onSubmit={handleSubmit}>
          <img src={img} alt="sibdev" className="logo" />
          <h3>Вход</h3>

          <div className="login__input">
            <label><p>Логин</p></label>
            { (loginDerty && loginError) ?

            <input className='red' onChange={e => loginHandler(e)} onBlur={e => blurHandler(e)} defaultValue={login} type="text" name='login'/> :

            <input onChange={e => loginHandler(e)} onBlur={e => blurHandler(e)} defaultValue={login} type="text" name='login'/> }

            {(loginError && loginDerty) ? <div className='error active'>{loginError}</div> : <div className='error'>{loginError}</div>}
          </div>

          <div className="login__input">
            <label>Пароль</label>
            { (passwordError && passwordDerty) ?
            <input className='red' onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)} defaultValue={password} type="password" name='password'/> :
            <input onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)} defaultValue={password} type="password" name='password'/> }
            {(passwordDerty && passwordError) ? <div className='error active'>{passwordError}</div> : <div className='error'>{passwordError}</div>}
          </div>

          <button disabled={!formValid} type='submit'>Войти</button>
      </form>
    </div>
  )
}

export default Cover