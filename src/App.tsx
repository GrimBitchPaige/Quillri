import { useState } from "react";
import "./App.css";

import Titlebar from "./Titlebar";
import { getCurrentWindow } from "@tauri-apps/api/window";

import Editor from "./PlainTextEditor";
import Test from "./Test";

function App() {
  
  return (
    <main className="container">
      <h1>Let's make an editor</h1>
      <Test />
    </main>
  );
    
    
}

export default App;
