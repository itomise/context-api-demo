import React, { useReducer } from 'react'

type State = {
    count: number
};

type Action =
{ type: 'INCREMENT' } |
{ type: 'DECREMENT' }

const reducer = (state: State, action: Action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

const initialState = {
  count: 0
}

const ReducerOnly: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>カウント: { state.count }</h1>
      <button onClick={() => dispatch({type:'INCREMENT'})}>+</button>
      <button onClick={() => dispatch({type:'DECREMENT'})}>-</button>
    </div>
  )
}

export { ReducerOnly }