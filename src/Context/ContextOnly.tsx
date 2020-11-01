import React, { useState, createContext, useContext } from "react";

const CountContext = createContext(
  {} as {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
  }
);

const ContextOnly: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      <h1>カウント: {count}</h1>
      <Child />
    </CountContext.Provider>
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
  const { count, setCount } = useContext(CountContext);

  return (
    <>
      <p>孫コンポーネント</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
};

export { ContextOnly };
