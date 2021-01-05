
/* File: main.js is part of
Bismut - cross-platform Electron-based learning application
Copyright (C) 2020  alexcoder04 (<https://github.com/alexcoder04>)

Bismut is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Bismut is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/gpl-3.0>.
*/

const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

const menuTemplate = [
  {
    label: "Datei",
    submenu: [
      {
        label: "Startseite",
        accelerator: "Ctrl+H",
        click(item, focusedWindow){
          focusedWindow.loadURL(path.join('file://', __dirname, 'html/index.html'));
        }
      },
      {
        label: "Beenden",
        accelerator: "Ctrl+Q",
        click(){
          app.quit();
        }
      }
    ]
  },
  {
    label: "Bearbeiten",
    submenu: [
      {
        label: "Kopieren",
        role: "copy"
      },
      {
        label: "Ausschneiden",
        role: "cut"
      },
      {
        label: "Einfügen",
        role: "paste"
      }
    ]
  },
  {
    label: "Mehr",
    submenu: [
      {
        label: "Entwicklerwerkzeuge ein-/ausschalten",
        accelerator: "Ctrl+I",
        click(item, focusedWindow){
          focusedWindow.toggleDevTools();
        }
      },
      {
        label: "Neu laden",
        accelerator: "Ctrl+R",
        role: "reload"
      }
    ]
  },
  {
    label: "Über",
    submenu: [
      {
        label: "Über Callix-Helfer",
        click(item, focusedWindow){
          focusedWindow.loadURL(path.join('file://', __dirname, 'html/about.html'));
        }
      }
    ]
  }
]

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1600,
    height: 900,
    webPreferences: {
      nodeIntergration: false
    }
  });

  win.loadURL(path.join('file://', __dirname, '/index.html'));
  Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate));
}

app.on("ready", () => {
  createWindow();
});

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
