const customTitlebar = require('custom-electron-titlebar')
const si = require("systeminformation")
const { BrowserWindow, Menu } = require('electron').remote

const template = [
    {
        label: "App",
        submenu: [
            {
                label: "About",
                click: () => {
                    let about = new BrowserWindow({
                        height: 300,
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


document.addEventListener("DOMContentLoaded", () => {
    // CPU SPECS
    const manu = document.querySelector(".manu")
    const brand = document.querySelector(".brand")
    const speed = document.querySelector(".speed")
    const cores = document.querySelector(".cores")
    const threads = document.querySelector(".physCores")

    si.cpu((data) => {
        manu.innerHTML += data.manufacturer
        brand.innerHTML += data.brand
        speed.innerHTML += data.speed + " Ghz"
        threads.innerHTML += data.cores
        cores.innerHTML += data.physicalCores
    })

    // OS SPECS
    const platform = document.querySelector(".platform")
    const logo = document.querySelector(".logo")
    const release = document.querySelector(".release")
    const hostname = document.querySelector(".hostname")
    const build = document.querySelector(".build")

    si.osInfo((data) => {
        platform.innerHTML += data.platform
        logo.innerHTML += data.logofile
        release.innerHTML += data.release
        hostname.innerHTML += data.hostname
        build.innerHTML += data.build
    });

    // MOTHERBOARD SPECS
    const moboManu = document.querySelector(".moboManu")
    const model = document.querySelector(".model")
    const version = document.querySelector(".version")
    const serial = document.querySelector(".serial")


    si.chassis((data) => {
        moboManu.innerHTML += data.manufacturer
        model.innerHTML += data.model
        version.innerHTML += data.version
        serial.innerHTML += data.serial
    });

    // MEMORY SPECS
    const memSize = document.querySelector(".memSize")
    const type = document.querySelector(".type")
    const clockSpeed = document.querySelector(".clockSpeed")
    const memManu = document.querySelector(".memManu")
    const voltage = document.querySelector(".voltage")


    si.memLayout((data) => {
        memSize.innerHTML += data[0].size / 1024 / 1024
        type.innerHTML += data[0].type
        clockSpeed.innerHTML += data[0].clockSpeed + " Mhz"
        memManu.innerHTML += data[0].manufacturer
        voltage.innerHTML += data[0].voltageConfigured + "V"
    });

    // GRAPHICS SPECS
    const gpuModel = document.querySelector(".gpuModel")
    const vendor = document.querySelector(".vendor")
    const vram = document.querySelector(".vram")
    const gpus = document.querySelector(".gpus")


    si.graphics((data) => {
        gpus.innerHTML += data.controllers && data.controllers.length
        gpuModel.innerHTML += data.controllers[0].model
        vendor.innerHTML += data.controllers[0].vendor
        vram.innerHTML += data.controllers[0].vram
    });

})