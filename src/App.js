import './App.css';
import TodoList from './components/todoList/TodoList';
import { useState } from 'react';

function App() {
  let [plus, setPlus] = useState(0);
  let [inputText, setInputText] = useState('hello');

  const listsItem = [
    { id: 1, text: 'выучить базу js' },
    { id: 2, text: 'выучить базу html' },
    { id: 3, text: 'выучить базу css' },
    { id: 4, text: 'выучить базу vue' },
    { id: 5, text: 'выучить базу vue' },
  ];

  // const onAdd = () => {
  //   setPlus(plus + 1)
  // }
  const onMinus = () => {
    setPlus(plus - 1);
  };
  const onInputChange = (event) => {
    setInputText(event.target.value);
    console.log(event);
  };
  return (
    <div>
      <h1>{inputText}</h1>
      <input type="text" value={inputText} onChange={onInputChange} />
      <h1>{plus}</h1>
      <button onClick={() => setPlus(plus + 1)}> + increment</button>
      <button onClick={onMinus}> - decrement</button>
      {listsItem.map((element) => (
        <TodoList key={element.id} element={element} />
      ))}
      {/* <TodoList id={1}/> */}
    </div>
  );
}

export default App;
