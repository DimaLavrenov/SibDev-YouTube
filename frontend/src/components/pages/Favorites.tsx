import React from 'react';
import Header from '../Header';
import "../../App.scss";
import FavoritesList from '../FavoritesList';

interface Props {
  favorites: string[];
}

const Favorites: React.FC<Props> = ({ favorites }) => {
  return (
    <div className='favorites'>
        <Header />
        <FavoritesList favorites={favorites}/>
    </div>
  )
}

export default Favorites