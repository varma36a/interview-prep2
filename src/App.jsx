import React, { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import MyContext from "./MyContext";
import ChildComponent from "./components/ChildComponent";
import FirstComponent from "./components/FirstComponent";

const App = () => {
  const [counter, setCounter] = useState(0);
  const contextValue = "Hello from Context!";

  const inputRef = useRef(null);

  const btnClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      {/* <button onClick={btnClick}>Click</button> */}
      {/* <FirstComponent data={counter} func={setCounter} /> */}
      {/* <MyContext.Provider value={contextValue}>
        <ChildComponent />
      </MyContext.Provider> */}

      <input ref={inputRef} type="text" />
      <button
        onClick={() => {
          console.log(inputRef.current.value);
        }}>
        submit
      </button>
    </div>
  );
};

export default App;
