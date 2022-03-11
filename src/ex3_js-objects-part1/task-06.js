function getProperty(object, propertyPath) {
    const pathArray = propertyPath.split('.');
    let value = object;

    for (let i = 0; i < pathArray.length; i++) {
        value = value[pathArray[i]];

        if (value === undefined) {
            return undefined;
        }
    }

    return value;
}

module.exports = getProperty;
