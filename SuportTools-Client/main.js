const { app, BrowserWindow } = require('electron'),
fun = require('./funcoes')

function createWindow () {
  // Cria uma janela de navegação.
  let win = new BrowserWindow({

    webPreferences: {
      nodeIntegration: true
    }
  })

  // e carregar o index.html do aplicativo.
  win.loadFile('main.html')
}

app.whenReady().then(createWindow)

