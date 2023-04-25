import React from 'react';
import Cover from "../Cover";
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { redirect } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function Login() {

  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  )

  // return (
  //   <div className='login'>
  //     {isLoggedIn ? <div>  </div> : <Cover/> }
  //   </div>
  // )

  // if(isLoggedIn) return redirect("/search")

  // return (
  //   <div className='login'>
  //     {isLoggedIn ? <div>lox</div> : <Cover/> }
  //   </div>
  // )

  if(isLoggedIn){
    return <Navigate to="/search"/>
  } else{
    return (
      <div className='login'>
        {isLoggedIn ? <div>lox</div> : <Cover/> }
      </div>
    ) 
  }
}

export default Login