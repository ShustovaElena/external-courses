function setFirstLetterUpperCase(str) {
    const strArray = str.split(' ');
    const result = [];

    strArray.forEach((elem) => {
        result.push(elem[0].toUpperCase() + elem.slice(1));
    });

    return result.join(' ');
}

module.exports = setFirstLetterUpperCase;
