{
    // yttria/blocks_power.js
    const env = require("yttria/blocks_environment.js"); // I'm not sure if this is the right way to do it...

    const thermal_plug = extend(ThermalGenerator, "thermal-plug", {
        attribute: env.thermal_socket
    });
}
