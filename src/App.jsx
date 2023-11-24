import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MyContext from "./MyContext";
import ChildComponent from "./components/ChildComponent";
import FirstComponent from "./components/FirstComponent";

ChildComponent;

const App = () => {
  const [counter, setCounter] = useState(0);
  const contextValue = "Hello from Context!";

  const btnClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <button onClick={btnClick}>Click</button>
      <br />
      <FirstComponent data={counter} />
      <br />
      <MyContext.Provider value={contextValue}>
        <ChildComponent />
      </MyContext.Provider>
    </div>
  );
};

export default App;
