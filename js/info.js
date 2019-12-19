const customTitlebar = require('custom-electron-titlebar')
const { BrowserWindow, Menu } = require('electron').remote


let about;
const template = [
    {
        label: "App",
        submenu: [
            {
                label: "About",
                click: () => {
                    about = new BrowserWindow({
                        height: 350,
                        width: 350,
                        resizable: false,
                        frame: false,
                        backgroundColor: "#1a1b25",
                        webPreferences: {
                            nodeIntegration: true
                        },
                    })
                    about.loadFile("./html/about.html")
                    about.show()
                    about.on('closed', () => {
                        about = null
                    })
                }
            },
            {
                role: "quit"
            }
        ]
    }
]

const mainMenu = Menu.buildFromTemplate(template)

new customTitlebar.Titlebar({
    backgroundColor: customTitlebar.Color.fromHex("#1a1b25"),
    drag: true,
    maximizable: false,
    titleHorizontalAlignment: "center",
    menu: mainMenu
})