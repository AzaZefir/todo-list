// props ={setInputText,inputText,number,element:{id:..., status:false, text: '..', listsItem:[]}}
import { useState } from 'react';
import { Button } from '../ui/button/Button';
import style from './TodoList.module.css';
import trash from '../common/image/trash.svg'
import edit from '../common/image/pencil.svg'
import save from '../common/image/cloud-download.svg'

const TodoList = (props) => {
  const [isInputShow, setInputShow] = useState(false);
  const [inputData, setInputData] = useState(props.element.text);

  const onDeleteTask = () => {
    let deletedItem = props.listsItem.filter((item) => {
      return item.id !== props.element.id;
    });
    props.setListsItem(deletedItem);
    console.log(deletedItem);
  };

  const onEditMode = () => {
    setInputShow(!isInputShow);
  };

  const onChecked = () => {
    let checkedItem = props.listsItem.map((item) => {
      if (item.id === props.element.id) {
        return { ...item, status: !item.status };
      }
      return item;
    });
    props.setListsItem(checkedItem);
  };

  const onEditSaveMode = (newText) => {
    let edited = props.listsItem.map((el) => {
      if (el.id === props.element.id) {
        return { ...el, text: newText };
      }
      return el;
    });
    props.setListsItem(edited);
  };

  const onSubmitEditForm = (e) => {
    e.preventDefault();
    onEditSaveMode(inputData);
    setInputShow(false);
  };
  return (
    <div className="app d-flex">
      {isInputShow ? (
        <form className={style.formEdit} onSubmit={onSubmitEditForm}>
          <input
            type="text"
            autoFocus
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <Button><img src={save} alt="" /> Сохранить</Button>
        </form>
      ) : (
        <div className="todo-list d-flex">
          <strong>{props.number + 1}.</strong>
          <label className={props.element.status === true ? 'line' : ''}>
            <input
              id="checkboxId"
              className="checkbox"
              type="checkbox"
              checked={props.element.status}
              onChange={onChecked}
            />
           <span>{props.element.text}</span>
          </label>
        </div>
      )}

      <div className={style.todoBtn}>
        <Button onClick={onEditMode}>
          <img src={edit} alt="" />
         <span>редактировать</span> 
        </Button>
        <Button onClick={onDeleteTask}>
          <img src={trash} alt="" />
        удалить 
        </Button>
      </div>
    </div>
  );
};
export default TodoList;
