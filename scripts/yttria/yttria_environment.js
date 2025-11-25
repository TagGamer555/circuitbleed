{
    const atr = require("yttria/yttria_attributes");

    const ancient_metal_floor     = extend(Floor, "ancient-metal-floor", {});

    // reason for using SteamVents - allows 3x3 (and I like that)
    const thermal_socket_active   = extend(SteamVent, "thermal-socket-active", {});
    const thermal_socket_inactive = extend(SteamVent, "thermal-socket-inactive", {});

    thermal_socket_active.attributes.set(atr.thermal_socket, 0.111111111111);
    thermal_socket_inactive.attributes.set(atr.thermal_socket, 0.0); // just in case if SteamVents necessitate an attribute
}
