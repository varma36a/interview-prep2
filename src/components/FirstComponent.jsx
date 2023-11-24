import React from "react";

const FirstComponent = ({ data, func }) => {
  const setCounter = () => {
    func(10);
  };
  return (
    <div>
      {data}
      <button onClick={setCounter}>Set Value</button>
    </div>
  );
};

export default FirstComponent;
