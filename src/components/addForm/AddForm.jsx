import React from 'react';
import { Button } from '../ui/button/Button';
import style from './AddFrom.module.css'
import addIcon from '../common/image/plus-circle.svg'

export const AddForm = ({onSubmitForm,inputText,setInputText}) => {
  return (
    <form className={style.addForm} onSubmit={onSubmitForm}>
      <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <Button><img src={addIcon} alt="" /> Добавить</Button>
    </form>
  );
};
