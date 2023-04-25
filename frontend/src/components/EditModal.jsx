import React from 'react';
import style from "./EditModal.module.scss";

function EditModal() {
  return (
    <div className={style.container__edit}>
        <div className={style.edit__main}>
            <h4>Изменить запрос</h4>
            <form>
                <div className={style.field}>
                    <label>Запрос</label>
                    <input type="text" />
                </div>
                <div className={style.field}>
                    <label className={style.black}><span>*</span> Название</label>
                    <input type="text" />
                </div>
                <div className={style.field}>
                    <label className={style.black}>Сортировать по</label>
                    <select>
                        <option>Без сортировки</option>
                        <option>По релевантности</option>
                        <option>По времени</option>
                        <option>По рейтингу</option>
                        <option>По названию</option>
                        <option>По просмотрам</option>
                    </select>
                </div>
                <div className={style.field}>
                    <label className={style.black}>Максимальное количество</label>
                    <input type="text" placeholder='25' value='25' />
                </div>
                <div className={style.field__buttons}>
                    <button>Не изменять</button>
                    <button className={style.blue}>Изменить</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditModal