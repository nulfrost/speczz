const winInstall = require("electron-winstaller")
const path = require("path")


async function buildInstaller() {
    const rootPath = path.join(__dirname, "..")
    try {
        await winInstall.createWindowsInstaller({
            appDirectory: path.join(rootPath, "speczz-win32-x64"),
            noMsi: true,
            iconUrl: "https://raw.githubusercontent.com/Danex2/speczz/master/icon.png",
            exe: 'speczz.exe',
            setupExe: "speczzSetup.exe",
            skipUpdateIcon: true
        });
        console.log('It worked!');
    } catch (e) {
        console.log(`No dice: ${e.message}`);
    }
}

buildInstaller()