import React, { useReducer, createContext, useContext } from "react";

type State = {
  count: number;
};

type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const AppContext = createContext(
  {} as {
    state: State;
    dispatch: React.Dispatch<Action>;
  }
);

const initialState = {
  count: 0,
};

const ContextReducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <h1>カウント: {state.count}</h1>
      <Child />
    </AppContext.Provider>
  );
};

const Child: React.FC = () => {
  return (
    <>
      <p>子コンポーネント</p>
      <Grandchild />
    </>
  );
};

const Grandchild: React.FC = () => {
  const { dispatch } = useContext(AppContext);
  return (
    <>
      <p>孫コンポーネント</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </>
  );
};

export { ContextReducer };
