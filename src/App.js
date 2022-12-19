import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('prod')
  const [cost, setCost] = useState(1000)
  const [inCart, setInCart] = useState(false)

  function clickHander() {
    setName('new prod')
  }



  return (
    <div className="App">
      <p>{name}</p>
      <button onClick={clickHander}>btn</button>
      <button onClick={() => setName('New new prod')}>btn2</button>
      <br />
      <hr />
      {name}-{cost} <br />
      <button onClick={() => setName('some prod')}>Change prod</button> <br />
      <button onClick={() => setCost(2000)}>Change cost</button> <br />
       <span>{inCart ? 'в корзине' : 'не в корзине'}</span>
       <button onClick={() => setInCart(!inCart)}>+/-</button>

    </div>
  );
}

export default App;
