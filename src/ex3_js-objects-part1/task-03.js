function findKeyInObj(str, obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (key === str) {
                return true;
            }
        }
    }
    return false;
}

module.exports = findKeyInObj;
