function countSymbols(str) {
    const strArray = str.split('');
    const countSymbol = {};

    strArray.forEach((element) => {
        if (countSymbol.hasOwnProperty(element)) {
            countSymbol[element]++;
        } else {
            countSymbol[element] = 1;
        }
    });

    for (const key in countSymbol) {
        if (countSymbol.hasOwnProperty(key)) {
            console.log(key, countSymbol[key]);
        }
    }

    return undefined;
}

module.exports = countSymbols;
