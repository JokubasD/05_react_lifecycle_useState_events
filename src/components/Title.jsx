import { useState } from 'react';

export default function Title(props) {
  const [toShowState, setToShowState] = useState(true);

  function titleHideHandler(event) {
    toShowState ? setToShowState(false) : setToShowState(true);
    toShowState
      ? (event.target.innerText = 'show title')
      : (event.target.innerText = 'hide title');
  }
  return (
    <div>
      <h3>toShowState value: {toShowState.toString()}</h3>
      {toShowState && <h2>{props.children}</h2>}
      <button onClick={titleHideHandler}>hide title</button>
    </div>
  );
}
