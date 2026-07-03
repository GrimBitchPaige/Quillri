import React from 'react';
import { getCurrentWindow } from '@tauri-apps/api/window';

const appWindow = getCurrentWindow();

export default function Titlebar() {
  return (
    <div data-tauri-drag-region className="titlebar">
      <div className="titlebar-label">App Title</div>
      <div className="titlebar-controls">
        <button className="titlebar-btn" onClick={() => appWindow.minimize()}>—</button>
        <button className="titlebar-btn" onClick={() => appWindow.toggleMaximize()}>▢</button>
        <button className="titlebar-btn close-btn" onClick={() => appWindow.close()}>✕</button>
      </div>
    </div>
  );
}