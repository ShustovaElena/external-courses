function deleteSpace(str) {
    if (str[0] === ' ' && str[str.length - 1] === ' ') {
        return str.slice(1, -1);
    }

    return str;
}

module.exports = deleteSpace;
