require('dotenv').config({ path: '.env' });
const exec = require('child_process').exec;

const serverName = process.env.SERVER_NAME;
const serverVersion = process.env.SERVER_NAME_VERSION;
const modLoader = process.env.MOD_LOADER;
const modLoaderVersion = process.env.MOD_LOADER_VERSION;

const command = `npm start -- generate server ${serverName} ${serverVersion} --${modLoader} ${modLoaderVersion}`;

exec(command, { cwd: '../Nebula' }, (error) => {
    if (error) {
        console.log("🚀  error:", error)
        return;
    }
});

