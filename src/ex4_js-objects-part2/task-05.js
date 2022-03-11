function findString(str, findStr) {
    if (str.indexOf(findStr) === -1) {
        return false;
    }

    return true;
}

module.exports = findString;
