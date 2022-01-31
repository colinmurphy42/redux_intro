import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, signIn} from './actions'

function App() {
  const counter = useSelector(state => state.counter);
	const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      <h2>Are You Logged In? {isLogged ? 'Yes' : 'No'}</h2>
      <button onClick={() => dispatch(signIn())}>Sign In Or Out</button>
    </div>
  );
}
export default App;
