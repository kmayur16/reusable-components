import "./App.css";
import React, { useState } from "react";
import PopUps from "./components/PopUps/PopUps";
import Dropdown from "./components/Dropdown/Dropdown";
import Button from "./components/Button/Button";
// import Arrow from "./components/Arrow/Arrow";

function App() {
  return (
    <div className="App">
      <Dropdown></Dropdown>
      {/* <div>
        <PopUps
          toggle={(show: any) => <Button onClick={show}>Click Me...</Button>}
          content={(hide: any) => (
            <div>
              <Button onClick={hide}>Hide me..</Button>
            </div>
          )}
        />
      </div> */}
    </div>
  );
}

export default App;
