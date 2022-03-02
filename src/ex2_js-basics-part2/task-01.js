function defineType(param) {
  if (isNaN(param)) {
    return undefined;
  }

  if (typeof param === 'number') {
    return 'number';
  }

  if (typeof param === 'string') {
    return 'string';
  }

  return undefined;
}

module.exports = defineType;
