function reduceAnalog(array, callback, initialValue) {
    let result;

    if (initialValue) {
        result = callback(initialValue, array[0], 0, array);

        for (let i = 1; i < array.length; i++) {
            result = callback(result, array[i], i, array);
        }
    } else {
        result = callback(array[0], array[1], 1, array);

        for (let i = 2; i < array.length; i++) {
            result = callback(result, array[i], i, array);
        }
    }

    return result;
}

module.exports = reduceAnalog;
