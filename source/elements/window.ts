import { remote } from 'electron';

export class Window {
  title:string = "App";
  
  constructor() {
  }

  attached() {
    document.getElementById("min-btn").addEventListener("click", (e) => {
      var window: Electron.BrowserWindow = remote.getCurrentWindow();
      window.minimize();
    });

    document.getElementById("max-btn").addEventListener("click", (e) => {
      var window: Electron.BrowserWindow = remote.getCurrentWindow();

      if (window.isMaximized())
        window.unmaximize();
      else
        window.maximize();
    });

    document.getElementById("close-btn").addEventListener("click", (e) => {
      this.tryCloseWindow();
    });

    document.getElementById("help-btn").addEventListener("click", (e) => {
      this.showHelp();
    });
  }

  tryCloseWindow() {
    this.closeWindow();
  }

  closeWindow() {
    var window: Electron.BrowserWindow = remote.getCurrentWindow();

    window.close();
  }

  showHelp() {
    remote.getCurrentWindow().webContents.openDevTools();
  }
}
