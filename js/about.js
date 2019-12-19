const customTitlebar = require('custom-electron-titlebar')
const { Menu } = require('electron').remote

const template = [
    { role: "close" }
]

const aboutMenu = Menu.buildFromTemplate(template)

new customTitlebar.Titlebar({
    backgroundColor: customTitlebar.Color.fromHex("#1a1b25"),
    drag: true,
    maximizable: false,
    menu: aboutMenu
})
