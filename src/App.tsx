import React from 'react';
import { ContextOnly } from './Context/ContextOnly'
import { ReducerOnly } from './Context/ReducerOnly'
import { ContextReducer } from './Context/ContextReducer'

function App() {
  return (
    <div className="App">
      <ContextOnly />
      <ReducerOnly />
      <ContextReducer />
    </div>
  );
}

export default App;
