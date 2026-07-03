import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

import Titlebar from "./Titlebar";
import { getCurrentWindow } from "@tauri-apps/api/window";

const appWindow = getCurrentWindow();

const minimizeButton = document.getElementById("titlebar-minimize");
const maximizeButton = document.getElementById("titlebar-maximize");
const closeButton = document.getElementById("titlebar-close");

minimizeButton?.addEventListener("click", async () => {
  await appWindow.minimize();
});

maximizeButton?.addEventListener("click", async () => {
  await appWindow.toggleMaximize();
});

closeButton?.addEventListener("click", async () => {
  await appWindow.close();
});

function App() {
  
  return (
    <div className="app-container">
      <Titlebar/>
      <main className="container">
      </main>
    </div>
  );
}

export default App;
