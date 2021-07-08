import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <div className="count">
        <div className="iconCount">
          {count > 0 && <FontAwesomeIcon onClick={handleMinus} icon="minus" />}
        </div>

        <div className="center">{count}</div>
        <div className="iconCount">
          {count < 10 && <FontAwesomeIcon onClick={handlePlus} icon="plus" />}
        </div>
      </div>
      <button onClick={handleReset} className="button">
        Reset
      </button>
    </div>
  );
};

export default Counter;
