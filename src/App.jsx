import './App.css';
import Title from './components/Title';
import { useState } from 'react';

function App() {
  console.log('App.jsx created');
  const [style, setStyle] = useState('1rem');
  function resetBtn() {
    setStyle(() => {
      return '1rem';
    });
  }
  function sizeHandler() {
    setStyle((style) => {
      return `${parseFloat(style) + 1}rem`;
    });
  }
  return (
    <div className='App'>
      <button onClick={resetBtn}>Reset</button>
      <h1 onClick={sizeHandler} style={{ fontSize: style }}>
        Lifecycle
      </h1>
      <Title>Events and Hooks</Title>
    </div>
  );
}

export default App;
