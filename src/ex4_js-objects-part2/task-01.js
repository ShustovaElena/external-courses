function findPropInPrototype(propName, obj) {
    if (!propName || !obj) {
        return undefined;
    }

    for (const key in obj) {
        if (!obj.hasOwnProperty(key) && key === propName) {
            return obj[key];
        }
    }

    return undefined;
}

module.exports = findPropInPrototype;
