import React from "react";
import "./App.css";
import Feed from "./Feed/Feed";
import Sidebar from "./Sidebar/Sidebar";
import Widgets from "./Widgets/Widgets";

function App() {
  return (
    <div className="app">
       <Sidebar />
       <Feed />
      <Widgets />
    </div>
  );
}

export default App;