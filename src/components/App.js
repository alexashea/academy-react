import React, { useState } from 'react';
import {hot} from 'react-hot-loader';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      This is a sample stateful React application.
      <br />
      <br />
      Here is a button that will track
      how many times you click it:
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

export default hot(module)(App);