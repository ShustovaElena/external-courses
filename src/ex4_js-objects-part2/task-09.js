function insertStr(str, newStr, num) {
    const strArray = str.split(' ');

    strArray.splice(num + 1, 0, newStr);

    return strArray.join(' ');
}

module.exports = insertStr;
