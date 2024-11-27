import React, { useState } from 'react';

function Counter({ initialValue }) {
  
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(prevCount => Math.max(prevCount - 2, initialValue));
  };

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>Aumentar</button>
      <button onClick={decrement}>Disminuir</button>
    </div>
  );
}

export default Counter;