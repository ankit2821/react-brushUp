import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count == 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <>
      <h1>counter value: {count}</h1>
      <button onClick={handleCount}>Increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </>
  );
};

export default Counter;
