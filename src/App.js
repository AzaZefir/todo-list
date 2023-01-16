import './App.css';
import TodoList from './components/todoList/TodoList';
import { useEffect, useState } from 'react';
import { Header } from './components/header/Header';
import { AddForm } from './components/addForm/AddForm';

function App() {
  const [inputText, setInputText] = useState('');
  const [listsItem, setListsItem] = useState(JSON.parse(localStorage.getItem('todoItems')) || []);

  useEffect(()=>{
    localStorage.setItem('todoItems', JSON.stringify(listsItem))
  })

  let result = listsItem.reduce((acc, curStatus)=>{
    return acc + curStatus.status
  }, 0)

  const onSubmitForm = (e) => {
    e.preventDefault();
    let newTodo = {
      id: Date.now(),
      status: false,
      text: inputText,
    };
    setListsItem([...listsItem, newTodo]);
    setInputText('');
  };

  return (
    <div className='app-wrapper'>
      <Header result={result} listsItem={listsItem}/>

      <AddForm setInputText={setInputText} inputText={inputText} onSubmitForm={onSubmitForm}/>
      
      {listsItem.length ? (
        listsItem.map((element, index) => (
          <TodoList
            inputText={inputText}
            listsItem={listsItem}
            setListsItem={setListsItem}
            number={index}
            key={element.id}
            element={element}
          />
        ))
      ) : (
        <h1>Нет задач!</h1>
      )}
    </div>
  );
}

export default App;
