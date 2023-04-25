import React from 'react';
import Header from '../Header';
import ResultsList from '../ResultsList';

interface Props {
  favorites: string[];
  setFavorites : React.Dispatch<React.SetStateAction<string[]>>
}

const Results: React.FC<Props> = ({ favorites, setFavorites }) => {
  return (
    <div className="results">
        <Header />
        <ResultsList favorites={favorites} setFavorites={setFavorites} />
    </div>
  )
}

export default Results