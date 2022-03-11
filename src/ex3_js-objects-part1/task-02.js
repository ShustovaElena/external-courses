function defineKeyAndValue(obj) {
    if (!obj) {
        return;
    }

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key, obj[key]);
        }
    }
}

module.exports = defineKeyAndValue;
