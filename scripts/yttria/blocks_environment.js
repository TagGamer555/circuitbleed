{
    // yttria/blocks_environment.js
    const thermal_socket = Attribute.add("thermal_socket");
    
    const thermal_socket_active   = extend(Floor, "thermal-socket-active", {});
    const thermal_socket_inactive = extend(Floor, "thermal-socket-inactive", {});

    thermal_socket_active.attributes.set(thermal_socket, 1.0);

    module.exports = {
        thermal_socket: thermal_socket
    }
}
