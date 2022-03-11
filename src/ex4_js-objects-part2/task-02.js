function getObjWithoutPrototype() {
    return Object.create(null);
}

module.exports = getObjWithoutPrototype;
