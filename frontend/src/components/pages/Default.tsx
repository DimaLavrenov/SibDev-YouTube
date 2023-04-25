import React from 'react';
import { Link } from "react-router-dom";

function Default() {
  return (
    <div className='default'>
        <h1>Hello <span>SibDev</span>!</h1>
        <p>My name is Dima Lavrenov and you will hire me!</p>
        <Link to={'/login'}>
            <button>Test</button>
        </Link>
    </div>
  )
}

export default Default