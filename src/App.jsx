import React, { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import MyContext from "./MyContext";
import ChildComponent from "./components/ChildComponent";
import FirstComponent from "./components/FirstComponent";

const App = () => {
  const [counter, setCounter] = useState(0);
  const contextValue = "Hello from Context!";

  const [data, setData] = useState([]);

  const inputRef = useRef(null);

  const addData = () => {
    console.log(...data);
    setData([...data, inputRef.current.value]);
  };

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
      <button onClick={addData}>submit</button>
      {data.map((item, index) => {
        return <h2 key={index}>{item}</h2>;
      })}
    </div>
  );
};

export default App;
