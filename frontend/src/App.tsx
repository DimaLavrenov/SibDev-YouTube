import React, { FormEvent, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import Default from './components/pages/Default';
import Login from './components/pages/Login';
import Favorites from './components/pages/Favorites';
import Search from './components/pages/Search';
import { useSelector } from 'react-redux';
import { IRootState } from './store';

function App()  {

  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  )

  const [favorites, setFavorites] = useState<string[]>([]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Default/>}></Route>
          <Route path='/login' element={<Login/>}/>
          {/* <Route path='/favorites' element={isLoggedIn ? <Favorites/> : <Navigate to="/login"/>}/> */}
          <Route path='/favorites' element={<Favorites favorites={favorites}/>}/>
          {/* <Route path='/results' element={isLoggedIn ? <Results/> : <Navigate to="/login"/>}/> */}
          <Route path='/search' element={<Search favorites={favorites} setFavorites={setFavorites} />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;