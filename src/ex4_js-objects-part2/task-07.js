function cutStr(str, num) {
    if (str.length > num) {
        return `${str.slice(0, num - 1)}…`;
    }

    return str;
}

module.exports = cutStr;
