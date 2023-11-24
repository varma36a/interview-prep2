// ChildComponent.js
import React, { useContext } from "react";
import MyContext from "../MyContext";

const ChildComponent = () => {
  const contextValue = useContext(MyContext);

  return <p>{contextValue}</p>;
};

export default ChildComponent;
