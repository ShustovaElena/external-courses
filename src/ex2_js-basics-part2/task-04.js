function checkIdenticalElem(arr) {
  let result = false;

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] === arr[i - 1]) {
      result = true;
    } else {
      result = false;
      break;
    }
  }

  return result;
}

module.exports = checkIdenticalElem;
