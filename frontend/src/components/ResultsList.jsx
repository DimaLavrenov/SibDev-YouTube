import React, { useState, useEffect } from "react";
import "./ResultsList.scss";
import axios from "axios";
import img from "../assets/images/result-title.jpg";
import TextTruncate from "react-text-truncate";
import ModalFavorites from "./ModalFavorites";

const API_KEY = "AIzaSyDdgldQa8USPj1MxyWBMcGBLTpU-ywRDng";

function ResultsList({ favorites, setFavorites }) {

  const [modalActive, setModalActive] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false);
  const [search, setSearch] = useState('');
  const [articles, setArticles] = useState([]);
  const [request, setRequest] = useState('');
  const [filter, setFilter] = useState('requests');
  const [list, setList] = useState('fa-list');
  const [grid, setGrid] = useState('fa-table-cells active');
  const [saveFavorite, setSaveFavorite] = useState('fa-regular fa-heart');
  const LINK = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${search}&key=${API_KEY}`;
  const VIEWS_LINK = `https://youtube.googleapis.com/youtube/v3/videos/getRating?key=${API_KEY}`;

  const searchHandler = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setRequest(search)
    setShowAnswer(true)
    saveButton()

    axios
      .get(LINK)
      .then(data => {
        setArticles(data.data.items)
        console.log(articles);
      })
  }

  const handleList = () => {
    setList('fa-list active');
    setGrid('fa-table-cells');
    setFilter('requests list')
  }

  const handleGrid = () => {
    setGrid('fa-table-cells active');
    setList('fa-list');
    setFilter('requests grid')
  }

  const saveButton = () => {
    if(favorites.includes(search)){
      setSaveFavorite('fa-solid fa-heart')
    } else{
      setSaveFavorite('fa-regular fa-heart')
    }
  }

  return (
    <div className="container__search">
      {(showAnswer === true) ?
      <div className="full__search">
        <form onSubmit={handleSubmit} className='results__main'>
        <div className="results__container">
          <div className="res_title">
            <h1>Поиск видео</h1>
          </div>

          <div className="show__results">
            <div className="input">
              <input
                onChange={(e) => searchHandler(e)}
                value={search}
                type="text"
                placeholder="Что хотите посмотреть?"
              />
              <i onClick={() => setModalActive(true)} className={saveFavorite}></i>
            </div>
            <button type="submit">Найти</button>
          </div>

          <div className="results__info">
            <div className="info">
              <p>
                Видео по запросу <span>«{request}»</span>
              </p>
              <p className="count__results">7230</p>
            </div>
            <div className="filter">
              <div className="list">
                <i onClick={() => handleList()} className={`fa-solid ${list}`}></i>
              </div>
              <div className="grid">
                <i onClick={() => handleGrid()} className={`fa-solid ${grid}`}></i>
              </div>
            </div>
          </div>

          <div className={filter}>

            {/* {articles.map((article) => {
              return(
                <div className="item">
                  <iframe className="img__req" width='245px' height='189px' src={`https://www.youtube.com/embed/${article.id.videoId}`} allowFullScreen frameBorder='0'></iframe>
                  <div className='header__req'><TextTruncate line={2} element='div' truncateText="…"  text={article.snippet.title} /></div>
                  <div className="description__req">{article.snippet.channelTitle}<br />786 тыс. просмотров</div>
                </div>
              )
            })} */}

            <div className="item">
              <img src={img} alt="img" />
              <div className="text_for_flex">
                <div className='header__req'><TextTruncate line={2} element='div' truncateText="…"  text='HELLO HELLO HELLO HELLO HELLOHELLO HELLO HELLO HELLO HELLO' /></div>
                <div className="description__req">BULKIN<br />786 тыс. просмотров</div>
              </div>
            </div>

            <div className="item">
              <img src={img} alt="img" />
              <div className="text_for_flex">
                <div className='header__req'><TextTruncate line={2} element='div' truncateText="…"  text='HELLO HELLO HELLO HELLO HELLOHELLO HELLO HELLO HELLO HELLO' /></div>
                <div className="description__req">BULKIN<br />786 тыс. просмотров</div>
              </div>
            </div>

            <div className="item">
              <img src={img} alt="img" />
              <div className="text_for_flex">
                <div className='header__req'><TextTruncate line={2} element='div' truncateText="…"  text='HELLO HELLO HELLO HELLO HELLOHELLO HELLO HELLO HELLO HELLO' /></div>
                <div className="description__req">BULKIN<br />786 тыс. просмотров</div>
              </div>
            </div>

            <div className="item">
              <img src={img} alt="img" />
              <div className="text_for_flex">
                <div className='header__req'><TextTruncate line={2} element='div' truncateText="…"  text='HELLO HELLO HELLO HELLO HELLOHELLO HELLO HELLO HELLO HELLO' /></div>
                <div className="description__req">BULKIN<br />786 тыс. просмотров</div>
              </div>
            </div>

            <div className="item">
              <img src={img} alt="img" />
              <div className="text_for_flex">
                <div className='header__req'><TextTruncate line={2} element='div' truncateText="…"  text='HELLO HELLO HELLO HELLO HELLOHELLO HELLO HELLO HELLO HELLO' /></div>
                <div className="description__req">BULKIN<br />786 тыс. просмотров</div>
              </div>
            </div>

          </div>
        </div>
        </form>
        <ModalFavorites setSaveFavorite={setSaveFavorite} search={search} favorites={favorites} setFavorites={setFavorites} request={request} active={modalActive} setActive={setModalActive} />
      </div>
      
      :
      <div className="empry__search">
        <div className='container__videos'>
          <div className="title"><h1>Поиск видео</h1></div>
          <form onSubmit={handleSubmit} className="search__bar">
              <input type="text" placeholder='Что хотите посмотреть?' onChange={(e) => searchHandler(e)} value={search} />
              <button type='submit'>Найти</button>
          </form>
        </div>
      </div>
    }
    </div>

    


    // <div>
    //   <form onSubmit={handleSubmit}>
    //   <input onChange={e => searchHandler(e)} type="text" value={search}/>
    //   {articles.map(article => {
    //     return (
    //       <div>
    //         <iframe width="560" height="315" src={`https://www.youtube.com/embed/${article.id.videoId}`} allowFullScreen frameBorder='0'></iframe>
    //         <p>{article.snippet.title}</p>
    //       </div>
    //     )
    //   })}
    //   </form>
    // </div>
  );
}

export default ResultsList;
