{
    // yttria/blocks_power.js
    const env = require("blocks_environment.js"); // attempt 2

    const thermal_plug = extend(ThermalGenerator, "thermal-plug", {
        attribute: env.thermal_socket
    });
}
