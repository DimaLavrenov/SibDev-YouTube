import React, { useEffect, useState } from 'react';
import "./ModalFavorites.scss";

function ModalFavorites(props) {

  const [name, setName] = useState('');
  const [error, setError] = useState('Поле не может быть пустым!');
  const [derty, setDerty] = useState(true);

  useEffect(() => {
    if(derty){
      setDerty(true);
    } else{
      setDerty(false);
    }
  }, [name])

  const saveRequest = () => {
    props.setActive(false);
    props.setFavorites([...props.favorites, props.request]);
    saveButton()
  };

  const saveButton = () => {
    if(props.favorites.includes(props.search)){
      props.setSaveFavorite('fa-solid fa-heart')
    } else{
      props.setSaveFavorite('fa-regular fa-heart')
    }
  }

  const test = (e) => {
    setName(e.target.value);
    if(!e.target.value){
      setError('Поле не может быть пустым!')
    } else{
      setError('')
    }
  }

  return (
    <div className={props.active ? 'modal active' : 'modal'} >
        <div className={props.active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()} >
            <h3 className='title__modal'>Сохранить запрос</h3>
            <form>
              <div className="request__modal request">
                <label><p>Запрос</p></label>
                <input type="text" value={props.request} disabled />
              </div>
              <div className="request__modal">
                <label><p><span>*</span> Название</p></label>
                <input value={name} onChange={e => test(e)} type="text" placeholder='Укажите название' />
                {(derty) ? <div className='error active'>{error}</div> : <div className='error'>{error}</div>}
              </div>
              <div className="request__modal">
                <label><p>Сортировать по</p></label>
                <select>
                  <option>Без сортировки</option>
                  <option>По релевантности</option>
                  <option>По времени</option>
                  <option>По рейтингу</option>
                  <option>По названию</option>
                  <option>По просмотрам</option>
                </select>
              </div>
              <div className="request__modal">
                <label><p>Максимальное количество</p></label>
                <input type="text" placeholder='25' value='25' />
              </div>
              <div className="buttons__modal">
                <div onClick={() => props.setActive(false)} className='button__modal'>Не сохранять</div>
                <div onClick={saveRequest} className='button__modal save'>Сохранить</div>
              </div>
            </form>
        </div>
    </div>
  )
}

export default ModalFavorites