{
    // CORE UNITS
    const thought = extend(UnitType, "thought", {});
    thought.constructor = () => extend(UnitEntity, {});

    // ENEMY UNITS
    const lotus = extend(UnitType, "lotus", {});
    lotus.constructor = () => extend(UnitEntity, {});

    // MISC UNITS
    const thought_missile = extend(MissileUnitType, "thought-missile", {});
    const lotus_missile = extend(MissileUnitType, "lotus-missile", {});
}
