function sliceAnalog(array, begin, end) {
    const result = [];
    let from = begin || 0;
    let to = end || array.length;

    if (from < 0) {
        if (array.length < Math.abs(from)) {
            from = 0;
        } else {
            from = array.length + from;
        }
    }

    if (to < 0) {
        to = array.length + to;
    }

    if (to > array.length) {
        to = array.length;
    }

    for (let i = from; i < to; i++) {
        result.push(array[i]);
    }

    return result;
}

module.exports = sliceAnalog;
