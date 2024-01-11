import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="cntent">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
