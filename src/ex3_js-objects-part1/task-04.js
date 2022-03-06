function setKeyInObj(str, obj) {
    const newKey = str;
    const obj1 = obj;

    if (!obj.hasOwnProperty(str)) {
        obj1[newKey] = 'new';
    }
    return obj;
}

module.exports = setKeyInObj;
