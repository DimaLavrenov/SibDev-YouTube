import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FavoritesList.scss";
import EditModal from "./EditModal";

interface Props {
  favorites: string[];
}

const FavoritesList: React.FC<Props> = ({ favorites }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  const [modal, setModal] = useState(true);

  return (

    <div>
<div className="favorites__main">
      <div className="favorites__container">
        <div className="fav_title">
          <h1>Избранное</h1>
        </div>
        <div className="fav_list">
          <ul>
            {favorites.map((item, key) => {
              return (
                <li
                  key={key}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  <Link className="testtt" to={`/search?q=${item}`}>
                  <div className="value">{item}</div>
                  <div className="control">
                    <div className="edit">Изменить</div>
                    <div className="delete">Удалить</div>
                  </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>

    {/* <EditModal /> */}
    </div>

    
  );
};

export default FavoritesList;
