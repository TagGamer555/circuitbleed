{
    const atr = require("yttria/yttria_attributes");

    const thermal_socket_active   = extend(Floor, "thermal-socket-active", {});
    const thermal_socket_inactive = extend(Floor, "thermal-socket-inactive", {});

    thermal_socket_active.attributes.set(atr.thermal_socket, 1.0);
}
