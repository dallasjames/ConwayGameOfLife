import React from "react";
import GridContainer from "./components/GridContainer";
import RulesContainer from "./components/RulesContainer";
import Title from "./components/Title";
import './App.css';

function App() {
  return (
    <div className="App-header">
      <Title />
      <div className="mid_section_container">
        <GridContainer />
        <RulesContainer />
      </div>
    </div>
  );
}

export default App;