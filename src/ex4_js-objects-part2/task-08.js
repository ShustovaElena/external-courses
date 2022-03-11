function changeStrNotation(str) {
    const strArray = str.split(' ');
    let result = '';

    result += strArray[0][0].toLowerCase() + strArray[0].slice(1);

    for (let i = 1; i < strArray.length; i++) {
        result += strArray[i][0].toUpperCase() + strArray[i].slice(1).toLowerCase();
    }

    return result;
}

module.exports = changeStrNotation;
