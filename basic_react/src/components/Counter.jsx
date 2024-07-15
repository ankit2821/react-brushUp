import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
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
      <h1 className="text-white mb-4">counter value: {count}</h1>
      <button
        onClick={handleCount}
        className="ms-2 bg-green-600 rounded-xl p-2"
      >
        Increment
      </button>
      <button
        onClick={handleDecrement}
        className="ms-2 bg-red-600 rounded-xl p-2"
      >
        decrement
      </button>
    </>
  );
};

export default Counter;
